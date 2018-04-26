import React, {Component} from 'react';
import {EditorState, convertToRaw, ContentState} from 'draft-js';
import {Editor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './index.less';

export default class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };

    this.onEditorStateChange = this.onEditorStateChange.bind(this);
    this.save = this.save.bind(this);
  }

  componentWillMount() {
    document.title = 'Edit';
  }

  onEditorStateChange(editorState) {
    this.setState({
      editorState
    });
  }

  save() {
    /* todo */
  }

  render() {
    const {editorState} = this.state;
    return (
      <div className="edit">
        <label>标题<input type="text" name="title"/></label>
        <Editor
          editorState={editorState}
          wrapperClassName="editor-area"
          editorClassName="editor"
          toolbarClassName="toolbar"
          onEditorStateChange={this.onEditorStateChange}
        />
        <button onClick={this.save}>保存</button>
      </div>
    );
  }

}