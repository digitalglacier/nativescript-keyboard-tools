import { Common } from './keyboard-tools.common';
import * as application from "tns-core-modules/application";

export class KeyboardTools extends Common {

    constructor() {
        super();
        this.createListener();
    }

    createListener() {
        application.ios.addNotificationObserver(
            UIKeyboardDidShowNotification,
            (notification) => {
                this.isVisibleSubject.next(true);
                this.lastKeyboardHeightSubject.next(notification.userInfo.valueForKey(UIKeyboardFrameEndUserInfoKey).CGRectValue.size.height);
            }
        );

        application.ios.addNotificationObserver(
            UIKeyboardWillHideNotification,
            (notification) => {
                this.isVisibleSubject.next(false);
            }
        );
    }
}
