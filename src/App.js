import { useState,useContext } from "react";
import Comment from "./components/Comment";
import useNode from "./usenodes/Usenode";
import "./App.css";
import ErrorModal from "./components/ErrorModal";
import Context from "./context/Context";


const comments = {
  id: 1,
  items: [],
};
const App = () => {

  
  const [commentsData, setCommentsData] = useState(comments);

  const { insertNode, editNode, deleteNode } = useNode();

  const handleInsertNode = (folderId, item) => {

    const finalStructure = insertNode(commentsData, folderId, item);
    
    setCommentsData(finalStructure);
  };

  const handleEditNode = (folderId, value) => {

    const finalStructure = editNode(commentsData, folderId, value);
    
    setCommentsData(finalStructure);
  };

  const handleDeleteNode = (folderId) => {

    const finalStructure = deleteNode(commentsData, folderId);

    const temp = { ...finalStructure };

    setCommentsData(temp);
  };

const ctx= useContext(Context);

  return (
    <div className="App">
      {ctx.openconfirm&&<ErrorModal />}
      <Comment
        handleInsertNode={handleInsertNode}
        handleEditNode={handleEditNode}
        handleDeleteNode={handleDeleteNode}
        comment={commentsData}
      />
    </div>
  );
};

export default App;
