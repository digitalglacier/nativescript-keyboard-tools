import { Common } from './keyboard-tools.common';
import { BehaviorSubject } from 'rxjs';

export declare class KeyboardTools extends Common {

  isVisible(): BehaviorSubject<boolean>;

  lastHeight(): BehaviorSubject<number>;
  
}
