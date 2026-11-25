# Homework Assignment 3 — 문제별 풀이 지도

**자료 기준:** 사용자가 제공한 *Homework3_20262760_Hyun_Kyungyong_Solution.docx*의 문제 순서와 해설 구조를 따른다. 이 문서는 시험용 문제 인식 지도이며, 강의자료에 없는 조건이나 원문에서 판독되지 않는 기호를 임의로 보충하지 않는다.

## 시험장에서 먼저 분류하기

| 문제 | 소문제 | 문제 유형 | 첫 번째로 써야 할 것 |
|---|---|---|---|
| 1 | a | Static Bayesian game 구성 | (A_i,T_i,p_i,pi_i) |
| 1 | b | Bayesian Nash equilibrium, 연속행동 | Type별 BR + 기대 payoff FOC |
| 1 | c | Comparative statics | (di_1^*/dp) 부호 |
| 2 | 단일 | Bayesian Nash equilibrium, 연속행동 | Type별 Partner 1 BR + Partner 2 기대 payoff BR |
| 3 | a | Pure + mixed NE | 보수행렬 최적반응, 무차별 조건 |
| 3 | b | Bayesian NE, 이산 type | Type별 Pay/Free-ride payoff 비교 |
| 4 | a | Signaling game, PBE | Receiver BR + Sender deviation check |
| 4 | b | Separating PBE 불가능 증명 | 후보 분리전략 후 일탈 비교 |
| 4 | c | Pooling PBE 존재조건 | 각 pooling 후보의 일탈 조건 |
| 5 | a | Sequential auction | Bidder 2부터 backward induction |
| 5 | b | Efficiency comparison | Allocation rule + total surplus |
| 6 | a | Symmetric information, principal-agent | 노력별 기대산출·IR binding |
| 6 | b | Moral hazard, asymmetric information | IR + IC + binding constraints |
| 7 | a | Observable type contract | 유형별 (R(n)-c_i n) 최적화 |
| 7 | b | Hidden type / screening | Menu contract + IR/IC |
| 8 | a–c | Promotion probability | 가능한 output 조합별 확률 |
| 8 | d | Incentive to exert effort | 기대임금 차이 ≥ 노력비용 |

---

## Q1 — Two firms' investment with asymmetric cost information

### Q1(a) Identify action spaces, type spaces, beliefs, payoffs

**영문 트리거:** identify / action spaces / type spaces / beliefs / payoffs

**읽자마자 할 일:** 미분하지 않는다. 게임의 Bayesian normal form을 먼저 구성한다.

```text
Who moves? → Firm 1, Firm 2
What can they choose? → investment levels
Who knows the cost type? → Firm 2 knows own type
Who is uncertain? → Firm 1
What are possible types? → Firm 2: low / high cost
          ↓
Write A₁, A₂, T₁, T₂, beliefs, payoffs
```

원문 해설의 설정:
- (A_1=A_2=[0,\infty))
- (T_1=\{c_1\}), (T_2=\{c_{2L},c_{2H}\})
- (c_{2L}=1/2, c_{2H}=1)
- Firm 1의 belief: low type 확률 (p), high type 확률 (1-p)
- Firm 2는 자신의 유형을 알고 Firm 1의 유형은 확실히 안다.

Payoff는 문제에 주어진 유형별 cost를 반영해 작성한다. 이 문제의 payoff 구조는 상대 투자에 대한 부정적 효과와 자기 투자에 대한 비선형 비용을 포함한다.

**시험용 요약:** (A_i), (T_i), prior (p,1-p), 각자의 정보, type-contingent payoff를 순서대로 적는다.

### Q1(b) Find Bayesian Nash equilibrium as a function of p

**영문 트리거:** Find BNE / as a function of p

**왜 Firm 2부터인가?** Firm 2는 자기 cost type을 관찰한다. 따라서 low/high type 각각의 payoff를 따로 최대화한다. Firm 1은 Firm 2의 실제 유형을 모르므로 기대 payoff를 최대화한다.

<div class="workflow">
  <div class="workflow-step"><strong>Step 1 · Firm 2 observes its own cost type</strong><span>Low-cost type: derive the best response i₂ᴸ(i₁)</span><span>High-cost type: derive the best response i₂ᴴ(i₁)</span></div>
  <div class="workflow-arrow">↓</div>
  <div class="workflow-step"><strong>Step 2 · Firm 1 does not observe Firm 2's type</strong><span>Write expected payoff: p·π₁(low) + (1−p)·π₁(high)</span><span>Differentiate with respect to i₁ and set FOC₁ = 0</span></div>
  <div class="workflow-arrow">↓</div>
  <div class="workflow-step"><strong>Step 3 · Solve the best-response conditions jointly</strong><span>Substitute Firm 2's type-specific best responses into Firm 1's FOC</span><span>Solve for i₁*, i₂ᴸ*, and i₂ᴴ* → Bayesian Nash equilibrium</span></div>
</div>

Firm 2의 유형별 해설 식:
[
\frac{\partial\pi_2}{\partial i_2}
=10-i_1-2c_2i_2=0
\quad\Rightarrow\quad
i_2=\frac{10-i_1}{2c_2}.
]
[
\frac{\partial^2\pi_2}{\partial i_2^2}=-2c_2<0.
]

따라서:
[
i_{2L}=10-i_1,\qquad i_{2H}=\frac{10-i_1}{2}.
]

Firm 1의 기대 payoff:
[
E\pi_1=p\pi_1(i_1,i_{2L})+(1-p)\pi_1(i_1,i_{2H}).
]
그 payoff를 (i_1)로 미분해 FOC를 만들고, 유형별 BR을 대입해 연립한다. 제공된 해설의 결과:
[
i_1^*=\frac{10(1-p)}{3-p},\quad
i_{2L}^*=\frac{20}{3-p},\quad
i_{2H}^*=\frac{10}{3-p}.
]

**등호의 의미:** Firm 1의 FOC는 Firm 1의 한계 기대이익을 0으로 만드는 조건이다. Firm 2의 FOC도 Firm 2 자신의 한계이익을 0으로 만든다. 두 조건을 함께 만족해야 양쪽의 최적반응이 동시에 성립한다.

**시험용 요약:** Firm 2 type-by-type FOC → Firm 1 expected payoff FOC → BR 대입 → 연립 → SOC.

### Q1(c) Does i₁ increase or decrease as p changes?

**영문 트리거:** increase or decrease / explain

먼저 Q1(b)의 닫힌 형태 해를 가져온다. 새로 처음부터 최적화를 하지 않는다.

[
i_1^*(p)=\frac{10(1-p)}{3-p}.
]
[
\frac{di_1^*}{dp}
=\frac{-20}{(3-p)^2}<0.
]

따라서 (p)가 증가하면 (i_1^*)는 감소한다. 해설의 경제적 설명: low-cost Firm 2의 확률이 커지면 Firm 2의 투자가 증가하고, 두 투자가 strategic substitutes이므로 Firm 1은 투자를 줄인다.

**시험용 요약:** equilibrium expression → differentiate w.r.t. p → sign → economic intuition.

---

## Q2 — Partners invest; Partner 1 privately observes revenue type

**문제 유형:** 연속행동 Bayesian game

**읽기 트리거:** simultaneously / asymmetric information / Partner 1 knows / Partner 2 does not

```text
Partner 1 observes type → type-specific payoff maximization
Partner 2 does not observe type → expected payoff maximization
                         ↓
Both choose investments simultaneously
                         ↓
Type-specific BR₁ + expected BR₂
                         ↓
Solve together; check nonnegative action constraint
```

풀이 순서:
1. Normal form: 행동집합, 유형집합, belief, payoff를 정의한다.
2. Partner 1: 고/저 유형별로 자기 투자량에 대해 FOC를 구한다.
3. Partner 2: Partner 1의 유형을 평균낸 기대 payoff를 작성하고 자기 투자량으로 FOC를 구한다.
4. Best responses를 함께 푼다.
5. 투자량이 음수가 될 수 없는 제약을 확인한다. 제공된 해설도 내부해가 유효한 범위를 별도로 적고, 그 밖에서는 corner solution을 다시 계산해야 한다고 명시한다.

**시험용 요약:** Type 1 BRs → uninformed Partner 2 expected-payoff FOC → solve → (x_i\ge0) 확인.

---

## Q3 — Public good: pure/mixed NE and private costs

### Q3(a) Find all Nash equilibria when costs are common knowledge

**영문 트리거:** Find all NE / common knowledge / payoff table

1. 보수행렬을 문제의 조건 (c_i=1)에 맞게 대입한다.
2. 각 칸에서 Player 1의 최적반응을 표시한다.
3. 각 칸에서 Player 2의 최적반응을 표시한다.
4. 양쪽 최적반응이 동시에 표시된 칸이 pure NE다.
5. 혼합전략은 상대가 Pay할 확률을 (s)라고 두고 Pay와 Free-ride의 기대보수를 비교한다.

제공된 해설의 순수균형:
[
(Pay,Free\text{-}ride),\quad(Free\text{-}ride,Pay).
]

혼합전략에서 상대가 Pay할 확률이 (s)라면:
[
EU(Pay)=3,qquad EU(Free\text{-}ride)=4s.
]
두 행동을 섞으려면 무차별이어야 하므로:
[
3=4s\quad\Rightarrow\quad s=\frac34.
]

**왜 등호인가?** 각 행동에 양의 확률을 주려면 두 행동의 기대보수가 같아야 한다. 한쪽이 더 높으면 그 행동만 선택하는 편이 낫다.

**시험용 요약:** payoff matrix → mutual best responses → pure NE → (EU(Pay)=EU(Free)) → mixing probability.

### Q3(b) Costs are private information; show low-cost pay and high-cost free-ride

**영문 트리거:** type / independently / probability / show equilibrium

1. 각 Player의 type: low cost (c=1), high cost (c=3).
2. 상대가 low cost일 확률과 high cost일 확률을 이용해 상대의 Pay 확률을 계산한다.
3. 각자 자기 type별로 Pay payoff와 Free-ride expected payoff를 비교한다.
4. low-cost type의 Pay 조건과 high-cost type의 Free-ride 조건을 각각 부등식으로 쓴다.
5. 두 조건을 동시에 만족하는 (p) 범위를 구한다.

해설의 조건:
[
3\ge4(1-p)\Rightarrow p\ge\frac14,
]
[
4(1-p)\ge1\Rightarrow p\le\frac34.
]
따라서:
[
\frac14\le p\le\frac34.
]

**시험용 요약:** Type별 payoff 비교 2개 → 두 부등식 교집합 → 대칭적으로 BNE.

---

## Q4 — Signaling game and PBE

**문제 유형:** Sender type / message / Receiver action / belief

**읽자마자:** 게임 트리에서 Sender의 유형, 메시지, Receiver의 행동, 말단 보수를 분리한다.

```text
1. Receiver's optimal action after each message
                 ↓
2. Candidate pooling / separating Sender strategy
                 ↓
3. Bayes-consistent on-path belief
                 ↓
4. Off-path belief where needed
                 ↓
5. Sender: equilibrium message vs deviation payoff
                 ↓
6. Receiver sequential rationality + Sender no deviation
                 ↓
PBE candidate survives or is rejected
```

### Q4(a) Find pure pooling and separating PBE

- Receiver의 메시지별 최적 행동을 먼저 구한다.
- Pooling 후보는 두 유형이 같은 메시지를 보내는 경우다.
- Separating 후보는 유형별 메시지가 다른 경우다.
- 각 후보에서 belief를 정하고, Receiver의 최적반응을 계산한다.
- 마지막으로 Sender 각 유형이 다른 메시지로 이탈할 유인이 없는지 확인한다.

**중요:** Receiver의 최적반응만 맞다고 PBE가 되는 것이 아니다. Sender의 이탈 유인도 없어야 한다.

### Q4(b) Show no pure-strategy separating PBE exists

**영문 트리거:** Show that no ... exists

증명 흐름:
1. Q4(a)에서 확인한 유형의 지배적 메시지 선택을 이용해 가능한 separating 후보를 좁힌다.
2. 후보의 on-path belief와 Receiver 행동을 구한다.
3. Sender가 다른 메시지로 바꾸었을 때 받는 보수를 계산한다.
4. 이탈 보수가 균형경로 보수보다 크면 해당 후보는 PBE가 아니다.
5. 가능한 후보가 모두 탈락하면 separating PBE가 존재하지 않는다.

### Q4(c) For what value of parameter does no pooling PBE exist?

1. Pooling on each message를 별도 후보로 놓는다.
2. 각 후보에서 Receiver의 on-path action을 구한다.
3. 각 Sender type의 deviation payoff를 비교한다.
4. pooling이 성립할 수 있는 parameter 조건을 구한다.
5. pooling 후보들의 존재조건을 합쳐 no-pooling 조건을 도출한다.

**시험용 요약:** Receiver BR → pooling/separating candidate → belief → Sender deviation check → parameter condition.

---

## Q5 — Sequential first-price auction

### Q5(a) Find the equilibrium

**영문 트리거:** sequential move / observes bid / responds / risk-neutral

```text
Bidder 1 submits b₁
        ↓ observed by Bidder 2
Bidder 2: buy/win or step out? → backward induction first
        ↓
Find Bidder 2's threshold response
        ↓
Bidder 1 anticipates the threshold
        ↓
Expected payoff of Bidder 1
        ↓
FOC + SOC → optimal b₁
```

Bidder 2는 Bidder 1의 입찰을 관찰한 후 행동하므로 후발자부터 푼다. Bidder 1의 문제에서는 Bidder 2가 물러날 확률 또는 조건을 반영해 기대 payoff를 만든다.

**시험용 요약:** Follower response/threshold → leader expected payoff → FOC → SOC → equilibrium strategy.

### Q5(b) Is the auction efficient?

**영문 트리거:** efficient / total surplus / compared to standard auction

1. 각 valuation 조합에서 누가 물건을 가져가는지 allocation rule을 쓴다.
2. 더 높은 valuation을 가진 bidder가 항상 이기는지 확인한다.
3. 그렇지 않은 경우 비효율적 allocation이 발생하는 valuation 영역을 제시한다.
4. bidder surplus, seller revenue, total surplus를 구분한다.
5. 단순히 bidder payoff 합이 증가했다고 효율성이 높아졌다고 결론 내리지 않는다.

**시험용 요약:** Allocation rule → high valuation wins? → bidder surplus vs seller revenue vs total surplus.

---

## Q6 — Principal-agent: symmetric information and moral hazard

### Q6(a) Symmetric information

**영문 트리거:** symmetric information / for each effort / optimal contract

1. 노력 수준별 기대 산출 (E[x|e])을 계산한다.
2. 대칭정보에서는 principal이 effort를 관찰할 수 있다.
3. 각 effort를 유도할 때 참여제약(IR)을 만족하는 최소 고정임금을 설정한다.
4. Principal의 기대이윤을 effort별로 계산한다.
5. 이윤이 가장 큰 effort를 선택한다.

IR:
[
U_A(w,e)\ge\bar U.
]
최소 비용 계약에서는 IR이 binding할 수 있으므로 등식으로 둔다.

### Q6(b) Moral hazard / asymmetric information

**영문 트리거:** cannot observe effort / induce effort / loss due to asymmetric information

```text
Choose target effort e*
        ↓
Define wages by observable outcome: wL, wH
        ↓
IR: agent accepts contract
IC: agent prefers target effort to alternatives
        ↓
Identify binding constraints
        ↓
Solve wage pair
        ↓
Expected wage → Principal profit
        ↓
Compare with symmetric-information profit
```

- IR(Individual Rationality): 계약 수락 유인
- IC(Incentive Compatibility): 목표 노력을 선택할 유인

IR과 IC는 서로 다른 질문이다. IR만 만족하면 agent가 계약은 수락해도 목표 effort를 선택하지 않을 수 있다. 제공된 해설에서는 목표 effort를 유도하는 IC 조건을 비교하고 binding constraint를 이용해 임금을 구한다.

**시험용 요약:** Target effort → IR + IC → binding constraints → wages → expected wage → profit loss.

---

## Q7 — Expert translator: observable vs hidden type

### Q7(a) Type perfectly known

**영문 트리거:** perfectly know type / formulate optimal contract

1. Slow/Fast 유형별 작업시간과 effort disutility를 구한다.
2. Principal payoff (R(n)-w), agent utility (w-c_i n)을 작성한다.
3. 참여제약을 적용한다.
4. 비용을 최소화하는 임금 (w=c_i n)을 대입한다.
5. (R'(n)=c_i)에서 유형별 최적 페이지 수를 구한다.
6. (R''(n)<0)로 최대 여부를 확인한다.

### Q7(b) Type unknown; show fast gets same pages and slow gets fewer

**영문 트리거:** cannot know type / menu / show comparison

1. Principal이 ((n_s,w_s)), ((n_f,w_f)) 메뉴를 제시한다.
2. IR 두 개와 IC 두 개를 작성한다.
3. 어느 제약이 binding하는지 논리적으로 확인한다.
4. Binding constraints를 대입해 reduced problem으로 바꾼다.
5. (n_f) FOC와 (n_s) FOC를 각각 구한다.
6. (n_f)의 FOC가 observable-type first-best와 같음을 보인다.
7. Slow type의 왜곡이 아래 방향인지 확인한다.
8. 남은 제약이 충족되는지 검산한다.

**핵심 논리:** Fast type은 정보지대(information rent)를 얻고, 이를 줄이기 위해 slow type의 배정량이 왜곡될 수 있다. 단, 이 결과는 문제의 제약과 단일교차 구조 등 해당 모형의 조건 아래에서 확인해야 한다.

**시험용 요약:** Menu → 4 constraints → binding IR/IC → reduced objective → two FOCs → compare with first-best → remaining IC.

---

## Q8 — Promotion tournament and effort incentives

### Q8(a–c) Show promotion probability

**영문 트리거:** show probability / output / fair coin / independently

각 경우에서 가능한 output 조합을 표로 나눈다.

| Worker 1 output | Worker 2 output | Worker 1 promotion probability |
|---|---|---|
| Higher | Lower | 1 |
| Lower | Higher | 0 |
| Equal | Equal | 1/2 |

각 output 조합의 확률을 곱하고, Worker 1의 승진확률을 가중합한다.

[
P(Worker\ 1\ promoted)=\sum_{outcomes}
P(outcome)\times P(promoted\mid outcome).
]

### Q8(d) Induce both workers to work hard

**영문 트리거:** induce / expected net payoff / show that wage condition

1. Worker 1의 기대임금을 승진확률로 표현한다.
2. Worker 1이 hard effort를 할 때의 기대 순효용을 계산한다.
3. Worker 1이 shirk할 때의 기대 순효용을 계산한다.
4. Hard effort가 최적이 되려면 첫 번째가 두 번째 이상이어야 한다.
5. 노력비용을 반영해 임금차이 조건으로 정리한다.
6. 대칭적으로 Worker 2에도 같은 조건이 성립함을 확인한다.

**시험용 요약:** Expected promotion wage → hard utility → shirk utility → (U(H)\ge U(S)) → wage spread threshold.

---

## 마지막 10초 검산 목록

- [ ] 문제가 요구한 모든 소문제에 답했는가?
- [ ] payoff의 순서가 (Player 1, Player 2)인지 확인했는가?
- [ ] 유형별 최적화와 기대 payoff 최적화를 구분했는가?
- [ ] FOC를 썼다면 SOC 또는 경계조건을 확인했는가?
- [ ] 혼합전략 확률이 0과 1 사이인가?
- [ ] PBE라면 Receiver sequential rationality와 Sender no-deviation을 모두 확인했는가?
- [ ] SPNE라면 모든 부분게임을 확인했는가?
- [ ] IR과 IC를 구분했는가?
- [ ] Efficiency에서 total surplus와 단순 payoff transfer를 구분했는가?
- [ ] 마지막 답에 parameter range, 단위, 경제적 방향을 명시했는가?
