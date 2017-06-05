import { EventData } from "tns-core-modules/data/observable";
import { MainPageViewModel } from "../mainPage";
import { WrapLayout } from "tns-core-modules/ui/layouts/wrap-layout";
import { Page } from "tns-core-modules/ui/page";

export function pageLoaded(args: EventData) {
    let page = <Page>args.object;
    let view = require("ui/core/view");

    let wrapLayout = view.getViewById(page, "wrapLayoutWithExamples");

    let examples: Map<string, string> = loadExamples();

    let viewModel = new SubMainPageViewModel(wrapLayout, examples);
    page.bindingContext = viewModel;
}

export function loadExamples() {
    let examples = new Map<string, string>();
    examples.set("basics", "bindings/basics");
    examples.set("xmlbasics", "bindings/xmlbasics");

    return examples;
}

export class SubMainPageViewModel extends MainPageViewModel {
    constructor(container: WrapLayout, examples: Map<string, string>) {
        super(container, examples);
    }
}
