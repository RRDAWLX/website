import React, {Component} from 'react';
import {Editor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './index.less';

export default class Edit extends Component {

  /*constructor(props) {
    super(props);
  }*/

  componentWillMount() {
    document.title = 'Edit';
  }

  render() {
    return (
      <div className="edit">
        <h3>Edit</h3>
        <Editor
          wrapperClassName="editor-area"
          editorClassName="editor"
          toolbarClassName="toolbar"
        />
      </div>
    );
  }

}