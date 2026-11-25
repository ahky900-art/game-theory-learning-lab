# 시험 풀이 운영체계: 영문을 읽고 식으로 바꾸기

## 목표와 시간 제약

시험은 90분, 대문제 5개, 소문제 포함 약 15문항이다. 평균적으로 한 소문제에 5분이므로 풀이 구조를 시험 전에 자동화해야 한다.

- 문제 판독 및 식 도출: 약 1분
- 핵심 식 전개 및 계산: 약 3분
- 답·조건·부호 확인: 약 1분

이 시간은 목표 배분이지 모든 문항에 강제하는 절대 규칙은 아니다. 긴 유도 문제는 배점과 난도에 따라 시간을 더 배정하고, 짧은 정의·판별 문제에서 시간을 회수한다.

## 전체 사고 흐름

```text
STEP 0  문제의 동사와 조건을 표시
        ↓
STEP 1  누가(Player), 무엇을(Action), 언제(Move), 무엇을 아는가(Information)?
        ↓
STEP 2  연속 선택 / 이산 선택 / 확률 / 정보 비대칭 / 순차 구조 판별
        ↓
STEP 3  각 Player의 payoff 또는 expected payoff 작성
        ↓
STEP 4  요구하는 해법 선택
        ├─ 연속전략 최적화 → F.O.C. + S.O.C. → Best Response
        ├─ 동시 행동·보수행렬 → 상대 행동별 보수 비교 → Best Response
        ├─ 혼합전략 → 상대의 순수전략별 기대보수 → 무차별 등식
        ├─ 불완전정보 → Type·Prior·Belief → 유형별 최적반응
        ├─ 순차게임 → 뒤에서 앞으로 → SPNE/PBE
        └─ 계약·유인 → IR/IC 제약 → Binding constraint → 최적화
        ↓
STEP 5  해를 연립·대입·부등식으로 구함
        ↓
STEP 6  해의 범위, 비음수성, 이탈 유인, 균형 조건 검산
        ↓
STEP 7  질문이 요구한 문장으로 결론
```

## 영문 표현을 수학 행동으로 번역하는 사전

| 문제의 영어 표현 | 즉시 떠올릴 작업 |
|---|---|
| Identify the players / action spaces | 경기자 집합과 행동집합 작성 |
| Find / derive the best response | 상대 행동을 고정하고 자기 payoff 최대화 |
| Find Nash equilibrium | 모든 Player의 최적반응이 동시에 성립하는 조합 |
| Find all pure-strategy NE | 보수행렬에서 양쪽 최적반응 표시 |
| Find a mixed-strategy equilibrium | 상대의 순수행동에 대한 기대보수를 같게 둠 |
| Bayesian / privately observes / type | 유형집합, 사전확률, 신념, 유형별 전략 |
| Expected payoff / probability | 확률가중합 또는 기대값 계산 |
| Sequential / observes / after | 게임 트리와 행동 순서 작성 |
| Subgame-perfect | 모든 부분게임에서 최적반응인지 확인 |
| Pooling / separating | 유형별 메시지 전략과 Receiver의 신념 |
| Incentive compatibility | 자기 유형에 맞는 계약을 선택할 유인 비교 |
| Participation / reservation utility | IR: 계약 수락 효용 ≥ 외부선택 효용 |
| Show / prove | 조건을 양방향 또는 논리적으로 증명 |
| Compare / increase or decrease | 차이, 도함수, 부호 또는 사례 비교 |
| Efficient / total surplus | 전체 잉여와 배분의 효율성 검토 |
| Range / for what values | 최종 부등식을 변수에 대해 정리 |

## NE를 구할 때 등호를 왜 세우는가?

연속전략 동시게임에서 각 Player는 상대의 전략을 주어진 값으로 보고 자신의 payoff를 최대화한다.

1. Player 1의 문제: (max_{a_1} u_1(a_1,a_2))
2. 내부해라면 작은 변화에 대한 1차 변화율이 0이어야 하므로
   (partial u_1/partial a_1=0).
3. 이것은 Player 1의 최적반응 조건이다. Player 2도 같은 방식으로
   (partial u_2/partial a_2=0).
4. NE에서는 두 Player가 동시에 서로의 최적반응을 하고 있어야 하므로 두 F.O.C.를 연립한다.
5. S.O.C. 또는 오목성을 확인해 정지점이 최대인지 검증한다.

**핵심:** 등호는 두 Player의 payoff를 서로 같게 놓는 것이 아니다. 각자의 한계 payoff를 0으로 놓는 것이다. 두 F.O.C.를 연립하는 이유는 NE가 양쪽 최적반응의 교차점이기 때문이다.

경계해가 가능하면 F.O.C.=0만으로 끝내면 안 된다. 예를 들어 (a_i\geq0)이면 내부해인지 확인하고, 음수 해가 나오면 경계 (a_i=0)에서 payoff를 다시 비교한다.

## 풀이 유형별 시각적 절차

### A. 연속전략 NE / Cournot형

```text
Payoff u1(a1,a2), u2(a1,a2)
          ↓
각자 자기 행동으로 미분
          ↓
FOC1 = 0       FOC2 = 0
          ↓
두 Best Response를 연립
          ↓
a1*, a2* 도출
          ↓
SOC: own second derivative < 0
          ↓
가능 행동집합·경계해 확인
```

### B. 혼합전략 NE

```text
상대가 각 행동을 택할 확률을 변수로 둠
          ↓
내 순수전략 A의 기대보수 EU(A)
내 순수전략 B의 기대보수 EU(B)
          ↓
두 행동을 섞으려면 EU(A) = EU(B)
          ↓
상대 혼합확률 계산
          ↓
0≤확률≤1, 합=1 확인
```

왜 등호인가? 두 행동의 기대보수가 다르면 더 높은 기대보수의 행동만 선택하려 하기 때문이다. 양쪽 행동에 양의 확률을 주는 혼합균형에서는 무차별해야 한다.

### C. 순차게임 / SPNE

```text
게임 트리에서 마지막 의사결정 노드 찾기
          ↓
그 노드의 Player 최적 행동 선택
          ↓
그 행동을 앞 단계의 결과로 대체
          ↓
뒤에서 앞으로 반복 (Backward Induction)
          ↓
모든 부분게임에서 최적반응인지 확인
          ↓
SPNE
```

### D. 베이지안 게임

```text
누가 어떤 Type을 아는가?
          ↓
Type set + prior probability 작성
          ↓
관찰하지 못하는 Player의 expected payoff 작성
          ↓
관찰하는 Player는 type-by-type payoff 최대화
          ↓
각 Type의 Best Response + uninformed Player의 BR
          ↓
전략을 연립하고 확률·범위 검산
          ↓
Bayesian Nash Equilibrium
```

## 3분 답안의 최소 형식

1. **Set up:** 목적함수 또는 보수식을 한 줄로 쓴다.
2. **FOC / BR / Indifference / IR-IC:** 문제 유형에 맞는 핵심 조건을 쓴다.
3. **Solve:** 대입·연립·정리한다.
4. **Check:** SOC, 확률 범위, 비음수성, 이탈 유인을 확인한다.
5. **Answer:** 문제에서 요구한 결과를 명시한다.

## 자주 하는 실수

- NE를 찾으면서 양쪽 payoff를 같게 둔다. (잘못된 등식)
- F.O.C.만 구하고 S.O.C.와 경계해를 생략한다.
- 혼합전략에서 자신의 두 행동을 무차별하게 만드는 상대 확률을 구하지 않는다.
- Bayesian game에서 사적 정보를 아는 Player와 모르는 Player의 최적화가 같다고 가정한다.
- SPNE를 구하면서 도달 경로의 행동만 확인하고 미도달 부분게임을 빠뜨린다.
- IR과 IC를 같은 제약으로 취급한다.
