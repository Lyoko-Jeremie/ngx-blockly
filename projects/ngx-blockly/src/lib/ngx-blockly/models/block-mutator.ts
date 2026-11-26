export abstract class BlockMutator {

  private _name: string;
  private _blockList: string[] | null;

  constructor(name: string, blockList: string[] | null = null) {
    this._name = name;
    this._blockList = blockList;
  }

  public abstract decompose(block: any, workspace: any): any;

  public abstract compose(block: any, topBlock: any): void;

  public abstract saveConnections(block: any, containerBlock: any): void;

  public abstract afterBlockInit(block: any): void;

  public abstract saveExtraState(): any;

  public abstract loadExtraState(state: any): void;

  /**
   * @deprecated Use saveExtraState instead
   * https://developers.google.com/blockly/guides/create-custom-blocks/extensions#saveextrastate_and_loadextra
   */
  public mutationToDom(block: any): any {
  }

  /**
   * @deprecated Use loadExtraState instead
   * https://developers.google.com/blockly/guides/create-custom-blocks/extensions#saveextraextrastate_and_loadextrastate
   */
  public domToMutation(block: any, xmlElement: any): void {
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get blockList(): string[] | null {
    return this._blockList;
  }

  set blockList(value: string[] | null) {
    this._blockList = value;
  }
}
