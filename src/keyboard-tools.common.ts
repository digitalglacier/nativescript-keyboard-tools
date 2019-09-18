import { Observable } from 'tns-core-modules/data/observable';
import * as app from 'tns-core-modules/application';
import * as dialogs from 'tns-core-modules/ui/dialogs';
import { BehaviorSubject } from 'rxjs';

export class Common extends Observable {

  protected isVisibleSubject: BehaviorSubject<boolean>;
  protected lastKeyboardHeightSubject: BehaviorSubject<number>;

  constructor() {
    super();

    this.isVisibleSubject = new BehaviorSubject(false);
    this.lastKeyboardHeightSubject = new BehaviorSubject(0);
  }

  lastHeight(): BehaviorSubject<number> {
      return this.lastKeyboardHeightSubject;
  }

  isVisible(): BehaviorSubject<boolean> {
      return this.isVisibleSubject;
  }

}