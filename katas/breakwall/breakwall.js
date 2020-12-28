function parsePolicy(policy) {
  if(!policy) {
    return { minCount: 0, maxCount: 0, value: "", password: "" }
  }

  let splitPolicy = policy.split(" ")

  let valueCount = splitPolicy[0].split("-")
  let value = splitPolicy[1].replace(":", "")
  let password = splitPolicy[2]

  let minCount = parseInt(valueCount[0])
  let maxCount = parseInt(valueCount[1])

  return { minCount, maxCount, value, password };
}

function validatePolicy(policy) {
  var characterCount = 0

  for (var characterIndex in policy.password)
  {
    let character = policy.password[characterIndex]
    if (character === policy.value) {
      characterCount++;
    }
  }

  if (characterCount < policy.minCount)
  {
    return false
  }
  else if (characterCount > policy.maxCount)
  {
    return false
  }
  else
  {
    return true
  }
}


module.exports.parsePolicy = parsePolicy
module.exports.validatePolicy = validatePolicy