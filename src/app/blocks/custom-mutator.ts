import {Blockly} from 'ngx-blockly';

/**
 * Blockly v10 起把 Mutator 重构为图标（MutatorIcon）。
 * 自定义 mutator 现在继承 Blockly.icons.MutatorIcon，
 * 并把 mini workspace 中可用的 block 类型传给基类。
 */
export class CustomMutator extends Blockly.icons.MutatorIcon {

  constructor(block: Blockly.BlockSvg) {
    super(['math_number'], block);
  }

  /**
   * 自定义图标尺寸（40x40），替代 v9 中覆写 drawIcon_ 的做法。
   */
  getSize(): Blockly.utils.Size {
    return new Blockly.utils.Size(40, 40);
  }

  /**
   * 点击图标时给出提示（v9 中通过 setVisible 实现）。
   */
  onClick(): void {
    alert('plus button was clicked');
    super.onClick();
  }
}
