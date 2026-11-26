import {BlockMutator} from './block-mutator';
import {Block} from './block';
import * as Blockly from 'blockly/core';

export abstract class CustomBlock extends Block {

  private _block!: Blockly.Block;
  private _blockMutator: BlockMutator | null;
  private _args: any[];


  protected constructor(type: string, blockMutator?: BlockMutator, ...args: any[]) {
    super(type);
    this._blockMutator = blockMutator ? blockMutator : null;
    this._args = args;
  }

  public init(block: Blockly.Block): void {
    this._block = block;
    this.defineBlock();
    this._block.setOnChange((event) => this.onChange(event));
  }

  public abstract defineBlock(): void;

  public onChange(changeEvent: Blockly.Events.Abstract): void {
    // nothing to do
  }

  public toXML(): string {
    return `<block type="${this.type}" disabled="${this.disabled}"></block>`;
  }

  public toDartCode(block: Blockly.Block): string | any[] {
    return 'Not implemented';
  }

  public toJavaScriptCode(block: Blockly.Block): string | any[] {
    return 'Not implemented';
  }

  public toLuaCode(block: Blockly.Block): string | any[] {
    return 'Not implemented';
  }

  public toPHPCode(block: Blockly.Block): string | any[] {
    return 'Not implemented';
  }

  public toPythonCode(block: Blockly.Block): string | any[] {
    return 'Not implemented';
  }

  get block(): Blockly.Block {
    return this._block;
  }

  set block(block: Blockly.Block) {
    this._block = block;
  }

  get blockMutator(): BlockMutator | null {
    return this._blockMutator;
  }

  set blockMutator(mutator: BlockMutator | null) {
    this._blockMutator = mutator;
  }

  get args(): any[] {
    return this._args;
  }

  set args(args: any[]) {
    this._args = args;
  }
}
