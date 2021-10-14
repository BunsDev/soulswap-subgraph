// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class FeeToSetter extends EthereumEvent {
  get params(): FeeToSetter__Params {
    return new FeeToSetter__Params(this);
  }
}

export class FeeToSetter__Params {
  _event: FeeToSetter;

  constructor(event: FeeToSetter) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get feeToSetter(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PairCreated extends EthereumEvent {
  get params(): PairCreated__Params {
    return new PairCreated__Params(this);
  }
}

export class PairCreated__Params {
  _event: PairCreated;

  constructor(event: PairCreated) {
    this._event = event;
  }

  get token0(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get token1(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get pair(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get param3(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class SetFeeTo extends EthereumEvent {
  get params(): SetFeeTo__Params {
    return new SetFeeTo__Params(this);
  }
}

export class SetFeeTo__Params {
  _event: SetFeeTo;

  constructor(event: SetFeeTo) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get feeTo(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class SetMigrator extends EthereumEvent {
  get params(): SetMigrator__Params {
    return new SetMigrator__Params(this);
  }
}

export class SetMigrator__Params {
  _event: SetMigrator;

  constructor(event: SetMigrator) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get migrator(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Factory extends SmartContract {
  static bind(address: Address): Factory {
    return new Factory("Factory", address);
  }

  INIT_CODE_PAIR_HASH(): Bytes {
    let result = super.call("INIT_CODE_PAIR_HASH", []);

    return result[0].toBytes();
  }

  try_INIT_CODE_PAIR_HASH(): CallResult<Bytes> {
    let result = super.tryCall("INIT_CODE_PAIR_HASH", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }

  allPairs(param0: BigInt): Address {
    let result = super.call("allPairs", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_allPairs(param0: BigInt): CallResult<Address> {
    let result = super.tryCall("allPairs", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  createPair(tokenA: Address, tokenB: Address): Address {
    let result = super.call("createPair", [
      EthereumValue.fromAddress(tokenA),
      EthereumValue.fromAddress(tokenB)
    ]);

    return result[0].toAddress();
  }

  try_createPair(tokenA: Address, tokenB: Address): CallResult<Address> {
    let result = super.tryCall("createPair", [
      EthereumValue.fromAddress(tokenA),
      EthereumValue.fromAddress(tokenB)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  feeTo(): Address {
    let result = super.call("feeTo", []);

    return result[0].toAddress();
  }

  try_feeTo(): CallResult<Address> {
    let result = super.tryCall("feeTo", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  feeToSetter(): Address {
    let result = super.call("feeToSetter", []);

    return result[0].toAddress();
  }

  try_feeToSetter(): CallResult<Address> {
    let result = super.tryCall("feeToSetter", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  getPair(param0: Address, param1: Address): Address {
    let result = super.call("getPair", [
      EthereumValue.fromAddress(param0),
      EthereumValue.fromAddress(param1)
    ]);

    return result[0].toAddress();
  }

  try_getPair(param0: Address, param1: Address): CallResult<Address> {
    let result = super.tryCall("getPair", [
      EthereumValue.fromAddress(param0),
      EthereumValue.fromAddress(param1)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  migrator(): Address {
    let result = super.call("migrator", []);

    return result[0].toAddress();
  }

  try_migrator(): CallResult<Address> {
    let result = super.tryCall("migrator", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  totalPairs(): BigInt {
    let result = super.call("totalPairs", []);

    return result[0].toBigInt();
  }

  try_totalPairs(): CallResult<BigInt> {
    let result = super.tryCall("totalPairs", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }
}

export class CreatePairCall extends EthereumCall {
  get inputs(): CreatePairCall__Inputs {
    return new CreatePairCall__Inputs(this);
  }

  get outputs(): CreatePairCall__Outputs {
    return new CreatePairCall__Outputs(this);
  }
}

export class CreatePairCall__Inputs {
  _call: CreatePairCall;

  constructor(call: CreatePairCall) {
    this._call = call;
  }

  get tokenA(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenB(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class CreatePairCall__Outputs {
  _call: CreatePairCall;

  constructor(call: CreatePairCall) {
    this._call = call;
  }

  get pair(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class SetFeeToCall extends EthereumCall {
  get inputs(): SetFeeToCall__Inputs {
    return new SetFeeToCall__Inputs(this);
  }

  get outputs(): SetFeeToCall__Outputs {
    return new SetFeeToCall__Outputs(this);
  }
}

export class SetFeeToCall__Inputs {
  _call: SetFeeToCall;

  constructor(call: SetFeeToCall) {
    this._call = call;
  }

  get _feeTo(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetFeeToCall__Outputs {
  _call: SetFeeToCall;

  constructor(call: SetFeeToCall) {
    this._call = call;
  }
}

export class SetFeeToSetterCall extends EthereumCall {
  get inputs(): SetFeeToSetterCall__Inputs {
    return new SetFeeToSetterCall__Inputs(this);
  }

  get outputs(): SetFeeToSetterCall__Outputs {
    return new SetFeeToSetterCall__Outputs(this);
  }
}

export class SetFeeToSetterCall__Inputs {
  _call: SetFeeToSetterCall;

  constructor(call: SetFeeToSetterCall) {
    this._call = call;
  }

  get _feeToSetter(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetFeeToSetterCall__Outputs {
  _call: SetFeeToSetterCall;

  constructor(call: SetFeeToSetterCall) {
    this._call = call;
  }
}

export class SetMigratorCall extends EthereumCall {
  get inputs(): SetMigratorCall__Inputs {
    return new SetMigratorCall__Inputs(this);
  }

  get outputs(): SetMigratorCall__Outputs {
    return new SetMigratorCall__Outputs(this);
  }
}

export class SetMigratorCall__Inputs {
  _call: SetMigratorCall;

  constructor(call: SetMigratorCall) {
    this._call = call;
  }

  get _migrator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetMigratorCall__Outputs {
  _call: SetMigratorCall;

  constructor(call: SetMigratorCall) {
    this._call = call;
  }
}
