"use client";

import {LexicalComposer} from "@lexical/react/LexicalComposer";
import {editorConfig} from "./config";

import {RichTextPlugin} from "@lexical/react/LexicalRichTextPlugin";
import {ContentEditable} from "@lexical/react/LexicalContentEditable";

import {HistoryPlugin} from "@lexical/react/LexicalHistoryPlugin";

import ToolbarPlugin from "./plugins/ToolBar";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";

export default function Editor() {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <ToolbarPlugin />

      <RichTextPlugin
        contentEditable={<ContentEditable className="editor-input" />}
        placeholder={<div className="placeholder">Start typing...</div>}
        ErrorBoundary={LexicalErrorBoundary}
      />

      <HistoryPlugin />
      <ListPlugin/>
      <ListPlugin/>
      <AutoFocusPlugin/>
    </LexicalComposer>
  );
}

