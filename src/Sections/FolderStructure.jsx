import React, { useEffect, useState } from "react";
import CodeViewer from "../Components/CodeViewer/CodeViewer";
import FolderCard from "../Components/FolderCard/FolderCard";
import FileCard from "../Components/FileCard/FileCard";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import {
  enlistFolders,
  extractDataFromFile,
  extractFileList,
} from "../API/index";
import { Divider } from "@material-ui/core";
import NestedList from "./ListFilesFolders";

const useStyles = makeStyles({
  color: {
    color: "red",
  },
});

const FolderStruct = (props) => {
  const styles = useStyles();
  const [folderStructure, setFolderStructure] = useState(null);
  const [activeFileList, setActiveFileList] = useState(null);
  const [singleCode, setSingleCode] = useState(null);
  const [folderTap, setFolderTap] = useState(false);

  useEffect(() => {
    const fetchFolderStructure = async () => {
      setFolderStructure(await enlistFolders());
      console.log(folderStructure);
    };
    fetchFolderStructure();
  }, []);

  const fetchCodeData = async function (fileURL) {
    setFolderTap(true);
    setSingleCode(await extractDataFromFile(fileURL));
    setFolderTap(false);
    console.log(singleCode);
  };

  const fetchFiles = async (listURL) => {
    setFolderTap(true);
    setActiveFileList(await extractFileList(listURL));
    setFolderTap(false);
    console.log("Active File LIST", activeFileList);
  };

  const checkFileType = (path) => {
    const extension = path.substr(path.lastIndexOf(".") + 1);
    if (extension === "cpp") return true;
    else return false;
  };

  return (
    <div>
      <span>
        {" "}
        {folderTap ? <CircularProgress /> : null}
        <div>Folder Here</div>
      </span>
      <NestedList directoryStructure={folderStructure} />

      {folderStructure
        ? folderStructure.map((element, index) => {
            return (
              <button onClick={(e) => fetchFiles(element.url)}>
                <FolderCard key={index} pathName={element.path} />
              </button>
            );
          })
        : null}
      <br />
      <Divider variant="inset" component="hr" gutterbottom />

      <br />

      {activeFileList
        ? activeFileList.map((fileName, fileIDX) => {
            return (
              <button onClick={(e) => fetchCodeData(fileName.url)}>
                <FileCard key={fileIDX} fileName={fileName.path} />
              </button>
            );
          })
        : null}

      <div>{singleCode ? <CodeViewer code={singleCode} /> : null}</div>
    </div>
  );
};

export default FolderStruct;
