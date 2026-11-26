import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {NgxBlocklyComponent} from './ngx-blockly/ngx-blockly.component';
import * as Blockly from 'blockly/core';

@NgModule({
  declarations: [NgxBlocklyComponent],
  imports: [],
  exports: [NgxBlocklyComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class NgxBlocklyModule {
}

// Blockly does not handle the CSS class of a category (categoryclass attribute)
// and it does not add separators defined in a JSON toolbox to the flyout
// when the previous item is a flyout item. So we override parseContents_.
Blockly.CollapsibleToolboxCategory.prototype.parseContents_ = function (this: any, categoryDef: any): void {
  const contents = categoryDef['contents'];
  let prevIsFlyoutItem = true;
  if (categoryDef['custom']) {
    this.flyoutItems_ = categoryDef['custom'];
  } else if (contents) {
    for (let i = 0, itemDef; (itemDef = contents[i]); i++) {
      // Separators can exist as either a flyout item or a toolbox item so
      // decide where it goes based on the type of the previous item.
      if (!Blockly.registry.hasItem(Blockly.registry.Type.TOOLBOX_ITEM, itemDef['kind']) ||
        (itemDef['kind'].toLowerCase() === Blockly.ToolboxSeparator.registrationName &&
          prevIsFlyoutItem)) {
        const flyoutItem = (itemDef);
        this.flyoutItems_.push(flyoutItem);
        prevIsFlyoutItem = true;
      } else {
        this.createToolboxItem(itemDef);
        prevIsFlyoutItem = false;
      }
    }
  }
  if (categoryDef['categoryclass']) {
    this.cssConfig_.row += ' ' + categoryDef['categoryclass'];
  }
};
