import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

// This method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {
    console.log('SG_Workspace extension is now active!');

    // Register the "create workspace" command
    const disposable = vscode.commands.registerCommand('sg-workspace.createWorkspace', async () => {
        // Get all open text documents
        const openDocuments = vscode.workspace.textDocuments.filter(doc => !doc.isUntitled && doc.uri.scheme === 'file');

        if (openDocuments.length === 0) {
            vscode.window.showWarningMessage('No files are open. Please open files to include in the workspace.');
            return;
        }

        // Collect file paths of all open documents
        const filePaths = openDocuments.map(doc => doc.uri.fsPath);

        // Ask the user where to save the .bat file
        const batUri = await vscode.window.showSaveDialog({
            filters: { 'Batch Files': ['bat'] },
            defaultUri: vscode.Uri.file(path.join(vscode.workspace.rootPath || '', 'workspace.bat')),
            title: 'Save Workspace Batch File'
        });

        if (!batUri) {
            vscode.window.showInformationMessage('Batch file creation cancelled.');
            return;
        }

        // Generate the .bat content
        const batContent = generateBatContent(filePaths);

        // Write the content to the selected file
        fs.writeFileSync(batUri.fsPath, batContent);

        // Notify the user
        vscode.window.showInformationMessage(`Workspace batch file created at: ${batUri.fsPath}`);
    });

    context.subscriptions.push(disposable);
}

// Generate the content for the .bat file
function generateBatContent(files: string[]): string {
    let content = 'code';
    files.forEach(file => {
        content += ` "${file}"`;
    });
    content += '\nexit\n';
    return content;
}

// This method is called when your extension is deactivated
export function deactivate() {}
