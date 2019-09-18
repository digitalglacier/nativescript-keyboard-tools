import { Common } from './keyboard-tools.common';
import { android as AndroidApp } from "tns-core-modules/application";
import { screen } from "tns-core-modules/platform";

export class KeyboardTools extends Common {

    private onGlobalLayoutListener: any;

    constructor() {
        super();
        this.createListener();
    }

    createListener() {
        const context = this;

        const rootView = AndroidApp.foregroundActivity.getWindow().getDecorView().getRootView();
        rootView.getViewTreeObserver().addOnGlobalLayoutListener(new android.view.ViewTreeObserver.OnGlobalLayoutListener({
            onGlobalLayout(): void {

                const rect = new android.graphics.Rect();
                const screenSize = new android.graphics.Point();

                AndroidApp.foregroundActivity.getWindow().getDecorView().getWindowVisibleDisplayFrame(rect);
                AndroidApp.foregroundActivity.getWindowManager().getDefaultDisplay().getSize(screenSize);

                const newKeyboardHeight = (screenSize.y - rect.bottom) / screen.mainScreen.scale;

                context.lastKeyboardHeightSubject.next(newKeyboardHeight);

                if (newKeyboardHeight === 0) {
                    context.isVisibleSubject.next(false);
                }

            }
        }));
    }

}
