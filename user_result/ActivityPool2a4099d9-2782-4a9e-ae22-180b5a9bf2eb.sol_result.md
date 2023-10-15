**THIS CHECKLIST IS NOT COMPLETE**. Use `--show-ignored-findings` to show all the results.
Summary
 - [unused-return](#unused-return) (6 results) (Medium)
 - [events-access](#events-access) (1 results) (Low)
 - [missing-zero-check](#missing-zero-check) (1 results) (Low)
 - [reentrancy-events](#reentrancy-events) (2 results) (Low)
 - [timestamp](#timestamp) (4 results) (Low)
 - [assembly](#assembly) (3 results) (Informational)
 - [dead-code](#dead-code) (35 results) (Informational)
 - [solc-version](#solc-version) (2 results) (Informational)
 - [low-level-calls](#low-level-calls) (4 results) (Informational)
 - [naming-convention](#naming-convention) (2 results) (Informational)
 - [reentrancy-unlimited-gas](#reentrancy-unlimited-gas) (1 results) (Informational)
 - [unused-state](#unused-state) (1 results) (Informational)
## unused-return
Impact: Medium
Confidence: Medium
 - [ ] ID-0
[ActivityPool.addNewAct(string,string,string,address,uint256,uint256,uint256,uint256)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1311-L1337) ignores return value by [activePeriod.add(id)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1334)

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1311-L1337


 - [ ] ID-1
[ActivityPool.removePeriodAct(uint256)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1340-L1347) ignores return value by [activePeriod.remove(pID)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1343)

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1340-L1347


 - [ ] ID-2
[ActivityPool.removePeriodAct(uint256)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1340-L1347) ignores return value by [removePeriod.add(pID)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1344)

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1340-L1347


 - [ ] ID-3
[ActivityPool.bet(uint256,uint256,uint256)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1350-L1398) ignores return value by [bUsers[pID].add(msg.sender)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1378)

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1350-L1398


 - [ ] ID-4
[ActivityPool.bet(uint256,uint256,uint256)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1350-L1398) ignores return value by [userPid[msg.sender].add(pID)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1370)

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1350-L1398


 - [ ] ID-5
[ActivityPool.bet(uint256,uint256,uint256)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1350-L1398) ignores return value by [aUsers[pID].add(msg.sender)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1375)

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1350-L1398


## events-access
Impact: Low
Confidence: Medium
 - [ ] ID-6
[Operator.setOperator(address)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L859-L861) should emit an event for: 
	- [operator = operator_](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L860) 

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L859-L861


## missing-zero-check
Impact: Low
Confidence: Medium
 - [ ] ID-7
[Operator.setOperator(address).operator_](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L859) lacks a zero-check on :
		- [operator = operator_](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L860)

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L859


## reentrancy-events
Impact: Low
Confidence: Medium
 - [ ] ID-8
Reentrancy in [ActivityPool.bet(uint256,uint256,uint256)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1350-L1398):
	External calls:
	- [IERC20(actInfo[pID].rewardToken).safeTransferFrom(msg.sender,address(this),amount)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1395)
	Event emitted after the call(s):
	- [Bet(msg.sender,pID,bType,amount,betInfo[id].betTime)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1397)

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1350-L1398


 - [ ] ID-9
Reentrancy in [ActivityPool.claim(uint256)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1417-L1429):
	External calls:
	- [IERC20(actInfo[pID].rewardToken).safeTransfer(msg.sender,amount)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1423)
	External calls sending eth:
	- [address(msg.sender).transfer(amount)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1425)
	Event emitted after the call(s):
	- [Claim(msg.sender,pID,betInfo[id].bType,amount)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1428)

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1417-L1429


## timestamp
Impact: Low
Confidence: Medium
 - [ ] ID-10
[ActivityPool.setPrize(uint256,uint256)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1400-L1413) uses timestamp for comparisons
	Dangerous comparisons:
	- [block.timestamp <= actInfo[pID].startTime](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1403)

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1400-L1413


 - [ ] ID-11
[ActivityPool.checkBet(address,uint256,uint256,uint256)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1544-L1564) uses timestamp for comparisons
	Dangerous comparisons:
	- [require(bool,string)(actInfo[pID].startTime <= block.timestamp,not start)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1551)
	- [require(bool,string)(actInfo[pID].endTime > block.timestamp,has end)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1552)

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1544-L1564


 - [ ] ID-12
[ActivityPool.checkAdd(address,uint256,uint256,uint256,uint256)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1574-L1587) uses timestamp for comparisons
	Dangerous comparisons:
	- [require(bool,string)(startTime > block.timestamp,startTime err)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1582)

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1574-L1587


 - [ ] ID-13
[ActivityPool.getStatus(uint256)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1589-L1607) uses timestamp for comparisons
	Dangerous comparisons:
	- [block.timestamp < actInfo[pID].startTime](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1594)
	- [actInfo[pID].startTime <= block.timestamp && actInfo[pID].endTime > block.timestamp](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1597-L1598)
	- [actInfo[pID].endTime <= block.timestamp && actInfo[pID].winType == 0](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1601)

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1589-L1607


## assembly
Impact: Informational
Confidence: High
 - [ ] ID-14
[EnumerableSet.values(EnumerableSet.UintSet)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1229-L1239) uses assembly
	- [INLINE ASM](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1234-L1236)

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1229-L1239


 - [ ] ID-15
[Address._revert(bytes,string)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L231-L243) uses assembly
	- [INLINE ASM](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L236-L239)

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L231-L243


 - [ ] ID-16
[EnumerableSet.values(EnumerableSet.AddressSet)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1155-L1165) uses assembly
	- [INLINE ASM](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1160-L1162)

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1155-L1165


## dead-code
Impact: Informational
Confidence: Medium
 - [ ] ID-17
[EnumerableSet.values(EnumerableSet.Bytes32Set)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1089-L1091) is never used and should be removed

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1089-L1091


 - [ ] ID-18
[Address.verifyCallResult(bool,bytes,string)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L219-L229) is never used and should be removed

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L219-L229


 - [ ] ID-19
[SafeMath.sub(uint256,uint256)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L385-L387) is never used and should be removed

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L385-L387


 - [ ] ID-20
[SafeMath.average(uint256,uint256)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L548-L551) is never used and should be removed

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L548-L551


 - [ ] ID-21
[EnumerableSet.length(EnumerableSet.Bytes32Set)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1063-L1065) is never used and should be removed

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1063-L1065


 - [ ] ID-22
[EnumerableSet.at(EnumerableSet.Bytes32Set,uint256)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1077-L1079) is never used and should be removed

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1077-L1079


 - [ ] ID-23
[Address.sendValue(address,uint256)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L60-L65) is never used and should be removed

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L60-L65


 - [ ] ID-24
[Address.functionCallWithValue(address,bytes,uint256)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L114-L120) is never used and should be removed

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L114-L120


 - [ ] ID-25
[EnumerableSet.contains(EnumerableSet.Bytes32Set,bytes32)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1056-L1058) is never used and should be removed

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1056-L1058


 - [ ] ID-26
[Address.functionDelegateCall(address,bytes,string)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L180-L187) is never used and should be removed

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L180-L187


 - [ ] ID-27
[SafeMath.percentageOfTotal(uint256,uint256)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L539-L541) is never used and should be removed

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L539-L541


 - [ ] ID-28
[SafeMath.sub(uint256,uint256,string)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L399-L408) is never used and should be removed

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L399-L408


 - [ ] ID-29
[SafeMath.percentageAmount(uint256,uint8)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L528-L530) is never used and should be removed

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L528-L530


 - [ ] ID-30
[SafeMath.bondingCurve(uint256,uint256)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L557-L559) is never used and should be removed

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L557-L559


 - [ ] ID-31
[Address.functionDelegateCall(address,bytes)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L170-L172) is never used and should be removed

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L170-L172


 - [ ] ID-32
[SafeERC20.safeIncreaseAllowance(IERC20,address,uint256)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L681-L688) is never used and should be removed

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L681-L688


 - [ ] ID-33
[SafeERC20.safePermit(IERC20Permit,address,address,uint256,uint256,uint8,bytes32,bytes32)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L703-L717) is never used and should be removed

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L703-L717


 - [ ] ID-34
[EnumerableSet.values(EnumerableSet.AddressSet)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1155-L1165) is never used and should be removed

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1155-L1165


 - [ ] ID-35
[EnumerableSet.remove(EnumerableSet.AddressSet,address)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1115-L1117) is never used and should be removed

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1115-L1117


 - [ ] ID-36
[SafeMath.sqrrt(uint256)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L512-L523) is never used and should be removed

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L512-L523


 - [ ] ID-37
[SafeERC20.safeApprove(IERC20,address,uint256)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L666-L679) is never used and should be removed

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L666-L679


 - [ ] ID-38
[SafeMath.quadraticPricing(uint256,uint256)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L553-L555) is never used and should be removed

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L553-L555


 - [ ] ID-39
[SafeMath.mod(uint256,uint256,string)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L502-L509) is never used and should be removed

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L502-L509


 - [ ] ID-40
[EnumerableSet.contains(EnumerableSet.AddressSet,address)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1122-L1124) is never used and should be removed

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1122-L1124


 - [ ] ID-41
[EnumerableSet.add(EnumerableSet.Bytes32Set,bytes32)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1039-L1041) is never used and should be removed

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1039-L1041


 - [ ] ID-42
[EnumerableSet._values(EnumerableSet.Set)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1023-L1025) is never used and should be removed

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1023-L1025


 - [ ] ID-43
[EnumerableSet.values(EnumerableSet.UintSet)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1229-L1239) is never used and should be removed

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1229-L1239


 - [ ] ID-44
[Context._msgData()](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L766-L768) is never used and should be removed

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L766-L768


 - [ ] ID-45
[Address.functionStaticCall(address,bytes)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L145-L147) is never used and should be removed

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L145-L147


 - [ ] ID-46
[SafeMath.mod(uint256,uint256)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L486-L488) is never used and should be removed

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L486-L488


 - [ ] ID-47
[SafeMath.substractPercentage(uint256,uint8)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L535-L537) is never used and should be removed

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L535-L537


 - [ ] ID-48
[SafeERC20.safeDecreaseAllowance(IERC20,address,uint256)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L690-L701) is never used and should be removed

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L690-L701


 - [ ] ID-49
[Address.functionStaticCall(address,bytes,string)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L155-L162) is never used and should be removed

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L155-L162


 - [ ] ID-50
[EnumerableSet.remove(EnumerableSet.Bytes32Set,bytes32)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1049-L1051) is never used and should be removed

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1049-L1051


 - [ ] ID-51
[Address.functionCall(address,bytes)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L85-L87) is never used and should be removed

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L85-L87


## solc-version
Impact: Informational
Confidence: High
 - [ ] ID-52
solc-0.8.4 is not recommended for deployment

 - [ ] ID-53
Pragma version[^0.8.1](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L4) allows old versions

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L4


## low-level-calls
Impact: Informational
Confidence: High
 - [ ] ID-54
Low level call in [Address.functionDelegateCall(address,bytes,string)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L180-L187):
	- [(success,returndata) = target.delegatecall(data)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L185)

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L180-L187


 - [ ] ID-55
Low level call in [Address.sendValue(address,uint256)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L60-L65):
	- [(success) = recipient.call{value: amount}()](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L63)

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L60-L65


 - [ ] ID-56
Low level call in [Address.functionCallWithValue(address,bytes,uint256,string)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L128-L137):
	- [(success,returndata) = target.call{value: value}(data)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L135)

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L128-L137


 - [ ] ID-57
Low level call in [Address.functionStaticCall(address,bytes,string)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L155-L162):
	- [(success,returndata) = target.staticcall(data)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L160)

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L155-L162


## naming-convention
Impact: Informational
Confidence: High
 - [ ] ID-58
Constant [Operator.baseRate](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L852) is not in UPPER_CASE_WITH_UNDERSCORES

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L852


 - [ ] ID-59
Function [IERC20Permit.DOMAIN_SEPARATOR()](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L625) is not in mixedCase

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L625


## reentrancy-unlimited-gas
Impact: Informational
Confidence: Medium
 - [ ] ID-60
Reentrancy in [ActivityPool.claim(uint256)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1417-L1429):
	External calls:
	- [address(msg.sender).transfer(amount)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1425)
	Event emitted after the call(s):
	- [Claim(msg.sender,pID,betInfo[id].bType,amount)](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1428)

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1417-L1429


## unused-state
Impact: Informational
Confidence: High
 - [ ] ID-61
[Operator.baseRate](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L852) is never used in [ActivityPool](user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L1243-L1648)

user_upload/2a4099d9-2782-4a9e-ae22-180b5a9bf2eb/ActivityPool2a4099d9-2782-4a9e-ae22-180b5a9bf2eb.sol#L852


