import { BankMsg, MsgMultiSend, MsgSend } from './bank/msgs';
import {
  DistributionMsg,
  MsgSetWithdrawAddress,
  MsgWithdrawDelegatorReward,
  MsgWithdrawValidatorCommission,
  MsgFundCommunityPool,
} from './distribution/msgs';
import {
  MsgGrantAllowance,
  MsgRevokeAllowance,
  FeeGrantMsg,
} from './feegrant/msgs';
import {
  GovMsg,
  MsgDeposit,
  MsgSubmitProposal,
  MsgVote,
  MsgVoteWeighted,
} from './gov/msgs';
import {
  MsgGrantAuthorization,
  MsgRevokeAuthorization,
  MsgExecAuthorized,
  MsgAuthMsg,
} from './authz/msgs';
import { MsgUnjail, SlashingMsg } from './slashing/msgs';
import {
  MsgBeginRedelegate,
  MsgCreateValidator,
  MsgDelegate,
  MsgEditValidator,
  MsgUndelegate,
  StakingMsg,
} from './staking/msgs';
import {
  MsgStoreCode,
  MsgInstantiateContract,
  MsgExecuteContract,
  MsgMigrateContract,
  MsgUpdateContractAdmin,
  MsgClearContractAdmin,
  WasmMsg,
} from './wasm/msgs';
import { MsgTransfer, IbcTransferMsg } from './ibc-transfer/msgs';
import {
  MsgCreateClient,
  MsgUpdateClient,
  MsgUpgradeClient,
  MsgSubmitMisbehaviour,
  IbcClientMsg,
} from './ibc/msgs/client';
import {
  MsgConnectionOpenInit,
  MsgConnectionOpenTry,
  MsgConnectionOpenConfirm,
  MsgConnectionOpenAck,
  IbcConnectionMsg,
} from './ibc/msgs/connection';
import {
  MsgChannelOpenInit,
  MsgChannelOpenTry,
  MsgChannelOpenConfirm,
  MsgChannelOpenAck,
  MsgChannelCloseInit,
  MsgChannelCloseConfirm,
  MsgRecvPacket,
  MsgAcknowledgement,
  MsgTimeout,
  MsgTimeoutOnClose,
  IbcChannelMsg,
} from './ibc/msgs/channel';
import { MsgVerifyInvariant, CrisisMsg } from './crisis';
import { Any } from '../proto/google/protobuf/any';

export type Msg =
  | BankMsg
  | DistributionMsg
  | FeeGrantMsg
  | GovMsg
  | MsgAuthMsg
  | SlashingMsg
  | StakingMsg
  | WasmMsg
  | IbcTransferMsg
  | IbcClientMsg
  | IbcConnectionMsg
  | IbcChannelMsg
  | CrisisMsg;

export namespace Msg {
  export type Amino =
    | BankMsg.Amino
    | DistributionMsg.Amino
    | FeeGrantMsg.Amino
    | GovMsg.Amino
    | MsgAuthMsg.Amino
    | SlashingMsg.Amino
    | StakingMsg.Amino
    | WasmMsg.Amino
    | IbcTransferMsg.Amino
    | CrisisMsg.Amino;

  export type Data =
    | BankMsg.Data
    | DistributionMsg.Data
    | FeeGrantMsg.Data
    | GovMsg.Data
    | MsgAuthMsg.Data
    | SlashingMsg.Data
    | StakingMsg.Data
    | WasmMsg.Data
    | IbcTransferMsg.Data
    | IbcClientMsg.Data
    | IbcConnectionMsg.Data
    | IbcChannelMsg.Data
    | CrisisMsg.Data;

  export type Proto =
    | BankMsg.Proto
    | DistributionMsg.Proto
    | FeeGrantMsg.Proto
    | GovMsg.Proto
    | MsgAuthMsg.Proto
    | SlashingMsg.Proto
    | StakingMsg.Proto
    | WasmMsg.Proto
    | IbcTransferMsg.Proto
    | IbcClientMsg.Proto
    | IbcConnectionMsg.Proto
    | IbcChannelMsg.Proto
    | CrisisMsg.Proto;

  export function fromAmino(data: Msg.Amino): Msg {
    switch (data.type) {
      // bank
      case 'bank/MsgSend':
        return MsgSend.fromAmino(data);
      case 'bank/MsgMultiSend':
        return MsgMultiSend.fromAmino(data);

      // distribution
      case 'distribution/MsgModifyWithdrawAddress':
        return MsgSetWithdrawAddress.fromAmino(data);
      case 'distribution/MsgWithdrawDelegationReward':
        return MsgWithdrawDelegatorReward.fromAmino(data);
      case 'distribution/MsgWithdrawValidatorCommission':
        return MsgWithdrawValidatorCommission.fromAmino(data);
      case 'distribution/MsgFundCommunityPool':
        return MsgFundCommunityPool.fromAmino(data);

      // feegrant
      case 'feegrant/MsgGrantAllowance':
        return MsgGrantAllowance.fromAmino(data);
      case 'feegrant/MsgRevokeAllowance':
        return MsgRevokeAllowance.fromAmino(data);

      // gov
      case 'gov/MsgDeposit':
        return MsgDeposit.fromAmino(data);
      case 'gov/MsgSubmitProposal':
        return MsgSubmitProposal.fromAmino(data);
      case 'gov/MsgVote':
        return MsgVote.fromAmino(data);
      case 'gov/MsgVoteWeighted':
        return MsgVoteWeighted.fromAmino(data);

      // msgauth
      case 'msgauth/MsgGrantAuthorization':
        return MsgGrantAuthorization.fromAmino(data);
      case 'msgauth/MsgRevokeAuthorization':
        return MsgRevokeAuthorization.fromAmino(data);
      case 'msgauth/MsgExecAuthorized':
        return MsgExecAuthorized.fromAmino(data);

      // slashing
      case 'slashing/MsgUnjail':
        return MsgUnjail.fromAmino(data);

      // staking
      case 'staking/MsgDelegate':
        return MsgDelegate.fromAmino(data);
      case 'staking/MsgUndelegate':
        return MsgUndelegate.fromAmino(data);
      case 'staking/MsgBeginRedelegate':
        return MsgBeginRedelegate.fromAmino(data);
      case 'staking/MsgCreateValidator':
        return MsgCreateValidator.fromAmino(data);
      case 'staking/MsgEditValidator':
        return MsgEditValidator.fromAmino(data);

      // wasm
      case 'wasm/MsgStoreCode':
        return MsgStoreCode.fromAmino(data);
      case 'wasm/MsgInstantiateContract':
        return MsgInstantiateContract.fromAmino(data);
      case 'wasm/MsgExecuteContract':
        return MsgExecuteContract.fromAmino(data);
      case 'wasm/MsgMigrateContract':
        return MsgMigrateContract.fromAmino(data);
      case 'wasm/MsgUpdateContractAdmin':
        return MsgUpdateContractAdmin.fromAmino(data);
      case 'wasm/MsgClearAdmin':
        return MsgClearContractAdmin.fromAmino(data);

      // ibc-transfer
      case 'cosmos-sdk/MsgTransfer':
        return MsgTransfer.fromAmino(data);

      // crisis
      case 'crisis/MsgVerifyInvariant':
        return MsgVerifyInvariant.fromAmino(data);
    }
  }
  export function fromData(data: Msg.Data): Msg {
    switch (data['@type']) {
      // bank
      case '/cosmos.bank.v1beta1.MsgSend':
        return MsgSend.fromData(data);
      case '/cosmos.bank.v1beta1.MsgMultiSend':
        return MsgMultiSend.fromData(data);

      // distribution
      case '/cosmos.distribution.v1beta1.MsgSetWithdrawAddress':
        return MsgSetWithdrawAddress.fromData(data);
      case '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward':
        return MsgWithdrawDelegatorReward.fromData(data);
      case '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission':
        return MsgWithdrawValidatorCommission.fromData(data);
      case '/cosmos.distribution.v1beta1.MsgFundCommunityPool':
        return MsgFundCommunityPool.fromData(data);

      // feegrant
      case '/cosmos.feegrant.v1beta1.MsgGrantAllowance':
        return MsgGrantAllowance.fromData(data);
      case '/cosmos.feegrant.v1beta1.MsgRevokeAllowance':
        return MsgRevokeAllowance.fromData(data);

      // gov
      case '/cosmos.gov.v1beta1.MsgDeposit':
        return MsgDeposit.fromData(data);
      case '/cosmos.gov.v1beta1.MsgSubmitProposal':
        return MsgSubmitProposal.fromData(data);
      case '/cosmos.gov.v1beta1.MsgVote':
        return MsgVote.fromData(data);
      case '/cosmos.gov.v1beta1.MsgVoteWeighted':
        return MsgVoteWeighted.fromData(data);

      // authz
      case '/cosmos.authz.v1beta1.MsgGrant':
        return MsgGrantAuthorization.fromData(data);
      case '/cosmos.authz.v1beta1.MsgRevoke':
        return MsgRevokeAuthorization.fromData(data);
      case '/cosmos.authz.v1beta1.MsgExec':
        return MsgExecAuthorized.fromData(data);

      // slashing
      case '/cosmos.slashing.v1beta1.MsgUnjail':
        return MsgUnjail.fromData(data);

      // staking
      case '/cosmos.staking.v1beta1.MsgDelegate':
        return MsgDelegate.fromData(data);
      case '/cosmos.staking.v1beta1.MsgUndelegate':
        return MsgUndelegate.fromData(data);
      case '/cosmos.staking.v1beta1.MsgBeginRedelegate':
        return MsgBeginRedelegate.fromData(data);
      case '/cosmos.staking.v1beta1.MsgCreateValidator':
        return MsgCreateValidator.fromData(data);
      case '/cosmos.staking.v1beta1.MsgEditValidator':
        return MsgEditValidator.fromData(data);

      // wasm
      case '/cosmwasm.wasm.v1.MsgStoreCode':
        return MsgStoreCode.fromData(data);
      case '/cosmwasm.wasm.v1.MsgInstantiateContract':
        return MsgInstantiateContract.fromData(data);
      case '/cosmwasm.wasm.v1.MsgExecuteContract':
        return MsgExecuteContract.fromData(data);
      case '/cosmwasm.wasm.v1.MsgMigrateContract':
        return MsgMigrateContract.fromData(data);
      case '/cosmwasm.wasm.v1.MsgUpdateAdmin':
        return MsgUpdateContractAdmin.fromData(data);
      case '/cosmwasm.wasm.v1.MsgClearAdmin':
        return MsgClearContractAdmin.fromData(data);

      // ibc-transfer
      case '/ibc.applications.transfer.v1.MsgTransfer':
        return MsgTransfer.fromData(data);

      // ibc-client
      case '/ibc.core.client.v1.MsgCreateClient':
        return MsgCreateClient.fromData(data);
      case '/ibc.core.client.v1.MsgUpdateClient':
        return MsgUpdateClient.fromData(data);
      case '/ibc.core.client.v1.MsgUpgradeClient':
        return MsgUpgradeClient.fromData(data);
      case '/ibc.core.client.v1.MsgSubmitMisbehaviour':
        return MsgSubmitMisbehaviour.fromData(data);

      // ibc-connection
      case '/ibc.core.connection.v1.MsgConnectionOpenInit':
        return MsgConnectionOpenInit.fromData(data);
      case '/ibc.core.connection.v1.MsgConnectionOpenTry':
        return MsgConnectionOpenTry.fromData(data);
      case '/ibc.core.connection.v1.MsgConnectionOpenConfirm':
        return MsgConnectionOpenConfirm.fromData(data);
      case '/ibc.core.connection.v1.MsgConnectionOpenAck':
        return MsgConnectionOpenAck.fromData(data);

      // ibc-channel
      case '/ibc.core.channel.v1.MsgChannelOpenInit':
        return MsgChannelOpenInit.fromData(data);
      case '/ibc.core.channel.v1.MsgChannelOpenTry':
        return MsgChannelOpenTry.fromData(data);
      case '/ibc.core.channel.v1.MsgChannelOpenConfirm':
        return MsgChannelOpenConfirm.fromData(data);
      case '/ibc.core.channel.v1.MsgChannelOpenAck':
        return MsgChannelOpenAck.fromData(data);
      case '/ibc.core.channel.v1.MsgChannelCloseInit':
        return MsgChannelCloseInit.fromData(data);
      case '/ibc.core.channel.v1.MsgChannelCloseConfirm':
        return MsgChannelCloseConfirm.fromData(data);
      case '/ibc.core.channel.v1.MsgRecvPacket':
        return MsgRecvPacket.fromData(data);
      case '/ibc.core.channel.v1.MsgAcknowledgement':
        return MsgAcknowledgement.fromData(data);
      case '/ibc.core.channel.v1.MsgTimeout':
        return MsgTimeout.fromData(data);
      case '/ibc.core.channel.v1.MsgTimeoutOnClose':
        return MsgTimeoutOnClose.fromData(data);

      // crisis
      case '/cosmos.crisis.v1beta1.MsgVerifyInvariant':
        return MsgVerifyInvariant.fromData(data);
    }
  }

  export function fromProto(proto: Any): Msg {
    switch (proto.typeUrl) {
      // bank
      case '/cosmos.bank.v1beta1.MsgSend':
        return MsgSend.unpackAny(proto);
      case '/cosmos.bank.v1beta1.MsgMultiSend':
        return MsgMultiSend.unpackAny(proto);

      // distribution
      case '/cosmos.distribution.v1beta1.MsgSetWithdrawAddress':
        return MsgSetWithdrawAddress.unpackAny(proto);
      case '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward':
        return MsgWithdrawDelegatorReward.unpackAny(proto);
      case '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission':
        return MsgWithdrawValidatorCommission.unpackAny(proto);
      case '/cosmos.distribution.v1beta1.MsgFundCommunityPool':
        return MsgFundCommunityPool.unpackAny(proto);

      // feegrant
      case '/cosmos.feegrant.v1beta1.MsgGrantAllowance':
        return MsgGrantAllowance.unpackAny(proto);
      case '/cosmos.feegrant.v1beta1.MsgRevokeAllowance':
        return MsgRevokeAllowance.unpackAny(proto);

      // gov
      case '/cosmos.gov.v1beta1.MsgDeposit':
        return MsgDeposit.unpackAny(proto);
      case '/cosmos.gov.v1beta1.MsgSubmitProposal':
        return MsgSubmitProposal.unpackAny(proto);
      case '/cosmos.gov.v1beta1.MsgVote':
        return MsgVote.unpackAny(proto);

      // authz
      case '/cosmos.authz.v1beta1.MsgGrant':
        return MsgGrantAuthorization.unpackAny(proto);
      case '/cosmos.authz.v1beta1.MsgRevoke':
        return MsgRevokeAuthorization.unpackAny(proto);
      case '/cosmos.authz.v1beta1.MsgExec':
        return MsgExecAuthorized.unpackAny(proto);

      // slashing
      case '/cosmos.slashing.v1beta1.MsgUnjail':
        return MsgUnjail.unpackAny(proto);

      // staking
      case '/cosmos.staking.v1beta1.MsgDelegate':
        return MsgDelegate.unpackAny(proto);
      case '/cosmos.staking.v1beta1.MsgUndelegate':
        return MsgUndelegate.unpackAny(proto);
      case '/cosmos.staking.v1beta1.MsgBeginRedelegate':
        return MsgBeginRedelegate.unpackAny(proto);
      case '/cosmos.staking.v1beta1.MsgCreateValidator':
        return MsgCreateValidator.unpackAny(proto);
      case '/cosmos.staking.v1beta1.MsgEditValidator':
        return MsgEditValidator.unpackAny(proto);

      // wasm
      case '/cosmwasm.wasm.v1.MsgStoreCode':
        return MsgStoreCode.unpackAny(proto);
      case '/cosmwasm.wasm.v1.MsgInstantiateContract':
        return MsgInstantiateContract.unpackAny(proto);
      case '/cosmwasm.wasm.v1.MsgExecuteContract':
        return MsgExecuteContract.unpackAny(proto);
      case '/cosmwasm.wasm.v1.MsgMigrateContract':
        return MsgMigrateContract.unpackAny(proto);
      case '/cosmwasm.wasm.v1.MsgUpdateAdmin':
        return MsgUpdateContractAdmin.unpackAny(proto);
      case '/cosmwasm.wasm.v1.MsgClearAdmin':
        return MsgClearContractAdmin.unpackAny(proto);

      // ibc-transfer
      case '/ibc.applications.transfer.v1.MsgTransfer':
        return MsgTransfer.unpackAny(proto);

      // ibc-client
      case '/ibc.core.client.v1.MsgCreateClient':
        return MsgCreateClient.unpackAny(proto);
      case '/ibc.core.client.v1.MsgUpdateClient':
        return MsgUpdateClient.unpackAny(proto);
      case '/ibc.core.client.v1.MsgUpgradeClient':
        return MsgUpgradeClient.unpackAny(proto);
      case '/ibc.core.client.v1.MsgSubmitMisbehaviour':
        return MsgSubmitMisbehaviour.unpackAny(proto);

      // ibc-connection
      case '/ibc.core.connection.v1.MsgConnectionOpenInit':
        return MsgConnectionOpenInit.unpackAny(proto);
      case '/ibc.core.connection.v1.MsgConnectionOpenTry':
        return MsgConnectionOpenTry.unpackAny(proto);
      case '/ibc.core.connection.v1.MsgConnectionOpenConfirm':
        return MsgConnectionOpenConfirm.unpackAny(proto);
      case '/ibc.core.connection.v1.MsgConnectionOpenAck':
        return MsgConnectionOpenAck.unpackAny(proto);

      // ibc-channel
      case '/ibc.core.channel.v1.MsgChannelOpenInit':
        return MsgChannelOpenInit.unpackAny(proto);
      case '/ibc.core.channel.v1.MsgChannelOpenTry':
        return MsgChannelOpenTry.unpackAny(proto);
      case '/ibc.core.channel.v1.MsgChannelOpenConfirm':
        return MsgChannelOpenConfirm.unpackAny(proto);
      case '/ibc.core.channel.v1.MsgChannelOpenAck':
        return MsgChannelOpenAck.unpackAny(proto);
      case '/ibc.core.channel.v1.MsgChannelCloseInit':
        return MsgChannelCloseInit.unpackAny(proto);
      case '/ibc.core.channel.v1.MsgChannelCloseConfirm':
        return MsgChannelCloseConfirm.unpackAny(proto);
      case '/ibc.core.channel.v1.MsgRecvPacket':
        return MsgRecvPacket.unpackAny(proto);
      case '/ibc.core.channel.v1.MsgAcknowledgement':
        return MsgAcknowledgement.unpackAny(proto);
      case '/ibc.core.channel.v1.MsgTimeout':
        return MsgTimeout.unpackAny(proto);
      case '/ibc.core.channel.v1.MsgTimeoutOnClose':
        return MsgTimeoutOnClose.unpackAny(proto);

      // crisis
      case '/cosmos.crisis.v1beta1.MsgVerifyInvariant':
        return MsgVerifyInvariant.unpackAny(proto);

      default:
        throw Error(`not supported msg ${proto.typeUrl}`);
    }
  }
}