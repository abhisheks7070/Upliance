import React, { useState, useEffect } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const RichTextEditor = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [userData, setUserData] = useState('');

    // Load user data from localStorage
    useEffect(() => {
        loadUserData();
    }, []);

    // Function to load user data
    const loadUserData = () => {
        const savedUserData = localStorage.getItem('userData');
        if (savedUserData) {
            const parsedData = JSON.parse(savedUserData);
            const { name, address, email, phone } = parsedData;
            const userDataString = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `;

            // Convert HTML to EditorState
            //   const blocksFromHtml = htmlToDraft(userDataString);
            //   const { contentBlocks, entityMap } = blocksFromHtml;
            //   const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
            //   setEditorState(EditorState.createWithContent(contentState));
            setUserData(userDataString);
        }
    };

    // Handle editor state change
    const onEditorStateChange = (newEditorState) => {
        setEditorState(newEditorState);
    };

    // Convert editor content to HTML
    const getEditorContentAsHtml = () => {
        return draftToHtml(convertToRaw(editorState.getCurrentContent()));
    };

    // Function to manually add user data
    const handleAddUserData = () => {


        // Convert HTML to EditorState
        const blocksFromHtml = htmlToDraft(userData);
        const { contentBlocks, entityMap } = blocksFromHtml;
        const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
        setEditorState(EditorState.createWithContent(contentState));
        // setUserData(userDataString);
    };

    // Function to reset the editor
    const handleReset = () => {
        setEditorState(EditorState.createEmpty());
        // setUserData('');
    };

    return (
        <div className="p-8 md:w-[50vw] w-[96vw] h-auto">
            <h1 className="md:text-2xl font-bold md:mb-4 mb-1 text-center">Rich Text Editor</h1>
            <div className="flex md:flex-row flex-col gap-2 md:mb-4 mb-2 ">
                <button
                    onClick={handleAddUserData}
                    className="md:px-4 md:text-base text-sm px-2 md:py-2 py-1 bg-blue-500 text-white rounded md:w-auto w-[30vw]"
                >
                    Add User Data
                </button>
                <button
                    onClick={handleReset}
                    className="md:px-4 md:text-base text-sm px-2 md:py-2 py-1 bg-red-500 text-white rounded md:w-auto w-[30vw]"
                >
                    Reset
                </button>
            </div>
            <div className="border rounded p-4 ">
                <Editor
                    editorState={editorState}
                    onEditorStateChange={onEditorStateChange}
                    toolbar={{
                        options: ['inline', 'list'],
                        inline: {
                            options: ['bold', 'italic', 'underline'],
                        },
                        list: {
                            options: ['unordered', 'ordered'],
                        },
                    }}
                />
            </div>
            <div className="md:mt-8 mt-4">
                <h2 className="md:text-xl font-bold md:mb-4 ">Preview:</h2>
                <div
                    className="border rounded p-4 preview-content "
                    dangerouslySetInnerHTML={{ __html: getEditorContentAsHtml() }}
                />
            </div>
        </div>
    );
};

export default RichTextEditor;