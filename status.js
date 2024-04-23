mergeStatus = [
  // Beacon chain launch
  ["mergeA",[100]],

  // Warmup fork (Altair)
  ["mergeB",[100]],

  // Merge! No more PoW
  ["mergeC", false],

  // Distributed validators
  ["mergeD",[100]],

  // Withdrawals
  ["mergeE",[100]],

  // Secret leader election
  ["mergeF",[60]], 

  // Per-slot participant selection
  ["mergeG",[50]],

  // SSF specification
  ["mergeH",[35]],

  // Implmentation
  ["mergeI",[0]],

  // Single slot finality (SSF)
  ["mergeJ", false],

  // Ideal quantum-safe signatures
  ["mergeK", false],

  // Increase validator count
  ["mergeL",[0]]
]

function progress(group) {
  for (step=0; step < group.length; step++) {
    if (group[step][1] != false) {
      ident = group[step][0]
      prog = group[step][1].slice(-1)
      grad = `linear-gradient(90deg, rgb(213 232 212) ${prog}%, rgb(250 250 250 / 0%) ${prog}%)`
      document.getElementById(ident).style.background = grad;
    }
  }
}

progress(mergeStatus)
