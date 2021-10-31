import * as vscode from "vscode"
import { init } from "./src/folderize"

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand("extension.folderizr", init)

  context.subscriptions.push(disposable)
}

export function deactivate() {}
