import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UntitledModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class UntitledModel {
  readonly id: string;
  readonly Name?: string;
  readonly Surname?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UntitledModel, UntitledModelMetaData>);
  static copyOf(source: UntitledModel, mutator: (draft: MutableModel<UntitledModel, UntitledModelMetaData>) => MutableModel<UntitledModel, UntitledModelMetaData> | void): UntitledModel;
}