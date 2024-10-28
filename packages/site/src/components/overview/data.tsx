import { createContext, PropsWithChildren } from "react";

export const tasks = {
  merge: {
    beaconChain: 6/5,
    warmup: 1,
    merge: 9/5,
    withdrawals: 1,
    distributedValidators: 1,
    secretLeaderElection: 1,
    perSlotParticipants: 11/10,
    singleSlotFinalitySpec: 1,
    singleSlotFinalityImpl: 11/10,
    singleSlotFinality: 11/10,
    increaseValidatorCount: 11/10,
    idealQuantumSafeSignatures: 1,
  },
  surge: {
    optimisticRollupFraudProvers: 1,
    zkEVMs: 1,
    eip4844Spec: 1,
    eip4844Impl: 1,
    basicRollupScaling: 1,
    peerDAS: 1,
    efficientDASelfHealing: 1,
    fullRollupScaling: 1,
    crossChainStandards: 1,
    noSetupCommitments: 1,
  },
  purge: {
    eliminateMostGasRefunds: 1,
    eip4444Spec: 1,
    eip4444Impl: 1,
    beaconChainFastSync: 1,
    p2pHistory: 1,
    historyExpiry: 1,
    banSelfDestruct: 1,
    simplifyGasMechanics: 1,
    evmPrecompilesImpl: 1,
    addressSpaceExtension: 1,
    stateExpiry: 1,
    logReform: 1,
    removeOldTransactionTypes: 1,
    serializationHarmonization: 1,
  },
  scourge: {
    extraProtocolMEV: 1,
    exploreEPBS: 1,
    inclusionLists: 1,
    exploreMEVBurn: 1,
    distributedBLockBuilding: 1,
    exploreExecutionTickets: 1,
    endgameBlockProduction: 1,
    appLayerMEVMinimization: 1,
    explorePreconfirmations: 1,
    raiseMaxEffectiveBalance: 1,
    improveNodeOperatorUsability: 1,
    exploreTotalStakeCapping: 1,
    exploreSolutionsToLiquidStakingCentralization: 1,
  },
  splurge: {
    eip1559: 1,
    eip4337Spec: 1,
    erc4337: 1,
    voluntaryEoaConversion: 1,
    inProtocolEnshrining: 1,
    endgameAccountAbstraction: 1,
    ethereumObjectFormat: 1,
    bigModularArithmetic: 1,
    furtherEvmImprovements: 1,
    endgameEvm: 1,
    endgameEip1559: 1,
    exploreDeepCrypto: 1,
    exploreDelayEncrypted: 1,
    verifiableDelayFunctions: 1,
  },
  verge: {
    evmDos: 1,
    basicLightClientSupport: 1,
    snarkLightClients: 1,
    snarkConsensusStateTransition: 1,
    verkleTreeSpecAndImpl: 1,
    codeChunkingAndGasCostUpdates: 1,
    transitionSpecAndImpl: 1,
    verkleTrees: 1,
    snarkVerkleProofs: 1,
    snarkL1Evm: 1,
    exploreEvmVerificationPrecompile: 1,
    fullySnarkedEthereum: 1,
    quantumSafeSnarks: 1,
    snarkStarkAsics: 1,
  },
} as const;

export type Fork = {
  [path in keyof typeof tasks]?: {
    [task in keyof typeof tasks[path]]?: number;
  };
};

export const forks: {
  name: string,
  contributions: Fork,
}[] = [
  {
    name: 'misc',
    contributions: {
      merge: {
        distributedValidators: 1,
      },
      surge: {
        optimisticRollupFraudProvers: 2/3,
        zkEVMs: .5,
        crossChainStandards: .3,
      },
      scourge: {
        extraProtocolMEV: 1,
        appLayerMEVMinimization: .2,
        improveNodeOperatorUsability: .25,
        exploreSolutionsToLiquidStakingCentralization: .2,
      },
      verge: {
        snarkStarkAsics: .2,
      },
      purge: {
        beaconChainFastSync: 1,
        p2pHistory: 1,
      },
      splurge: {
        eip4337Spec: 1,
        erc4337: 1,
      }
    },
  },
  {
    name: 'premerge',
    contributions: {
      merge: {
        beaconChain: 1.2,
        warmup: 1.0,
        merge: 1.8,
      },
      verge: {
        evmDos: 1,
        basicLightClientSupport: 1,
      },
      purge: {
        eliminateMostGasRefunds: 1,
      },
      splurge: {
        eip1559: 1,
        furtherEvmImprovements: .1,
      },
    },
  },
  {
    name: 'shapella',
    contributions: {
      merge: {
        withdrawals: 1,
      },
      scourge: {
        improveNodeOperatorUsability: .1,
      },
      purge: {
        banSelfDestruct: 1,
      },
    },
  },
  {
    name: 'dencun',
    contributions: {
      merge: {
        increaseValidatorCount: .1,
      },
      surge: {
        eip4844Spec: 1,
        eip4844Impl: 1,
        basicRollupScaling: 1,
      },
      scourge: {
        improveNodeOperatorUsability: .1,
        exploreSolutionsToLiquidStakingCentralization: .2,
      },
      splurge: {
        furtherEvmImprovements: .1,
      },
    },
  },
  {
    name: 'pectra',
    contributions: {
      merge: {
        increaseValidatorCount: .4,
      },
      scourge: {
        raiseMaxEffectiveBalance: 1,
        improveNodeOperatorUsability: .25,
        exploreSolutionsToLiquidStakingCentralization: .2,
      },
      splurge: {
        voluntaryEoaConversion: 1,
        inProtocolEnshrining: 1,
        furtherEvmImprovements: .1,
      },
    },
  },
  {
    name: 'other',
    contributions: {
      merge: {
        secretLeaderElection: .6,
        perSlotParticipants: .55,
        singleSlotFinalitySpec: .5,
        singleSlotFinality: .22,
        idealQuantumSafeSignatures: .2,
      },
      surge: {
        peerDAS: .5,
        efficientDASelfHealing: .2,
        fullRollupScaling: .5,
        noSetupCommitments: .2,
      },
      scourge: {
        exploreEPBS: .5,
        inclusionLists: .8,
        exploreMEVBurn: .2,
        distributedBLockBuilding: .2,
        exploreExecutionTickets: .2,
        endgameBlockProduction: .5,
        exploreTotalStakeCapping: .2,
      },
      verge: {
        snarkLightClients: .8,
        verkleTreeSpecAndImpl: .8,
        codeChunkingAndGasCostUpdates: .5,
        transitionSpecAndImpl: .8,
        verkleTrees: .5,
        fullySnarkedEthereum: .1,
        quantumSafeSnarks: .1,
      },
      purge: {
        eip4444Spec: 1,
        eip4444Impl: .2,
        historyExpiry: .5,
        simplifyGasMechanics: .2,
        evmPrecompilesImpl: .2,
        addressSpaceExtension: .3,
        stateExpiry: .2,
        logReform: .2,
        removeOldTransactionTypes: .2,
        serializationHarmonization: .2,
      },
      splurge: {
        endgameAccountAbstraction: .5,
        ethereumObjectFormat: .9,
        bigModularArithmetic: .75,
        endgameEvm: .5,
        endgameEip1559: .2,
        exploreDeepCrypto: .1,
        exploreDelayEncrypted: .1,
        verifiableDelayFunctions: .4,
      },
    },
  },
];

export type ProgressData = {
  tasks: typeof tasks,
  forks: typeof forks,
}

export const DataContext = createContext<ProgressData>({
  tasks,
  forks,
});

export const Data = ({ children }: PropsWithChildren) =>
  <DataContext.Provider value={{tasks, forks}}>
    { children }
  </DataContext.Provider>;
