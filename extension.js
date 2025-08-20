const vscode = require('vscode');
const { exec } = require('child_process');

function activate(context) {
    console.log("Forth extension activated!");

    let disposable = vscode.commands.registerCommand('forth.runFile', function () {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No file open!');
            return;
        }

        const filePath = editor.document.fileName;

        const terminal = vscode.window.createTerminal("Forth");
        terminal.show();
        terminal.sendText(`gforth "${filePath}"`);
        terminal.sendText("bye");
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
