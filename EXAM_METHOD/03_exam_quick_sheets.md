# 시험용 요약 풀이 카드

이 문서는 상세 해설을 대체하지 않는다. 상세 해설을 이해한 뒤, 시험장에서 식과 순서를 빠르게 재현하기 위한 압축본이다.

## 1. Continuous-action Nash equilibrium

**Trigger:** simultaneously choose quantities/investments; find NE.

[
\max_{a_1}u_1(a_1,a_2),\quad
\max_{a_2}u_2(a_1,a_2)
]
[
FOC_1:\frac{\partial u_1}{\partial a_1}=0,
\quad
FOC_2:\frac{\partial u_2}{\partial a_2}=0.
]
Solve simultaneously; verify own-action SOCs and action bounds.

**왜 연립?** NE는 양쪽 best response가 동시에 성립하는 교차점.

## 2. Bayesian Nash equilibrium with continuous actions

**Trigger:** one player observes type; other does not.

[
BR_{informed}(t):\quad
\frac{\partial u_i(a_i,a_j;t)}{\partial a_i}=0
quad\text{for each }t.
]
[
EU_{uninformed}=\sum_t p(t)u_j(a_j,a_i(t);t),
\quad
\frac{\partial EU}{\partial a_j}=0.
]
Substitute type-specific BRs; solve; check SOC and nonnegative actions.

## 3. Mixed-strategy NE

**Trigger:** randomize / mixed strategy.

[
EU(A)=EU(B)
]
Set equal because the opponent's mixing makes the player indifferent between every action used with positive probability. Solve the opponent's mixing probability; check [0,1].

## 4. Pure-strategy NE in a payoff matrix

**Trigger:** find all pure NE.

Mark each player's best payoff in every opponent-action column/row. Cells that are mutual best responses are pure NE. No calculus needed.

## 5. Signaling game / PBE

**Trigger:** Sender type, message, Receiver response, belief.

1. Receiver BR after each message.
2. Candidate pooling/separating strategy.
3. Beliefs (Bayes rule on path).
4. Sender type-by-type deviation payoff.
5. Sequential rationality + no profitable deviation.

## 6. Sequential game / SPNE

**Trigger:** sequential / observes / after / subgame-perfect.

Backward induction: last decision node → optimal action → replace continuation → move backward. Check every proper subgame.

## 7. Principal-agent

**Trigger:** hidden effort / induce / contract.

[
IR: U_A(contract)\ge\bar U,
\qquad
IC: U_A(e^*)\ge U_A(e'),\ orall e'.
]
Identify binding constraints, solve wages, calculate expected wage and principal profit.

## 8. Screening / hidden type menu

**Trigger:** unknown type / menu of contracts.

Write two IR + two IC constraints. Determine binding constraints from incentives and type ordering. Substitute into objective, derive FOCs, compare with full-information allocation, verify remaining constraints.

## 9. Comparative statics

**Trigger:** increase/decrease / as parameter changes.

Start from equilibrium (x^*(\theta)), differentiate:
[
\frac{dx^*}{d\theta}
]
Then determine sign and explain the mechanism. Do not redo the entire equilibrium unless required.

## 10. Efficiency

**Trigger:** efficient / total surplus.

Check whether the good/resource goes to the highest-value user or whether total surplus is maximized. Separate:
- Individual bidder/agent payoff
- Seller/principal revenue
- Total surplus

A transfer between participants is not automatically an efficiency gain.
