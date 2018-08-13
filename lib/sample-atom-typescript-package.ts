import {CompositeDisposable} from "atom";
import SampleAtomTypescriptPackageView from "./sample-atom-typescript-package-view";

let myTestPkgView: SampleAtomTypescriptPackageView;
let modalPanel: any;
let subscriptions: CompositeDisposable;

export function activate(state: any) {
    myTestPkgView = new SampleAtomTypescriptPackageView(state.myTestPkgViewState);
    modalPanel = atom.workspace.addModalPanel({
        item: myTestPkgView.getElement(),
        visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    subscriptions.add(atom.commands.add('atom-workspace',
        'sample-atom-typescript-package:toggle', () => toggle()
    ));
}

export function deactivate() {
    modalPanel.destroy();
    subscriptions.dispose();
    myTestPkgView.destroy();
}

export function serialize() {
    return {
        myTestPkgViewState: myTestPkgView.serialize()
    };
}

function toggle() {
    console.log('SampleAtomTypescriptPackage was toggled!');
    return (
        modalPanel.isVisible() ?
            modalPanel.hide() :
            modalPanel.show()
    );
}
