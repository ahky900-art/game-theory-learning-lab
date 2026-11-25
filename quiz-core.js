// Small, deterministic phrase-to-equation drill bank shared by the browser and Node tests.
(function(root){
const ITEMS=[
{phrase:"Find the best response of Player 1",operation:"Fix the opponent's action and maximize Player 1's payoff.",equation:"∂u₁/∂a₁ = 0",reason:"Player 1 changes only their own action; the opponent's action is held fixed."},
{phrase:"Find a Bayesian Nash equilibrium",operation:"Use type-contingent best responses and expected payoff for uninformed players.",equation:"BRᵢ(tᵢ), ∂E[uⱼ]/∂aⱼ = 0",reason:"Private information creates separate optimization problems by type."},
{phrase:"Find a mixed-strategy equilibrium",operation:"Make the opponent indifferent between pure actions used with positive probability.",equation:"EU(A) = EU(B)",reason:"If one action paid more, the player would not randomize over both."},
{phrase:"Show that no separating PBE exists",operation:"Test every candidate separating strategy and check sender deviations.",equation:"u(type,on-path) ≥ u(type,deviation)",reason:"A candidate fails if any sender type has a profitable deviation."},
{phrase:"Find the subgame-perfect equilibrium",operation:"Apply backward induction and verify every proper subgame.",equation:"Optimize at the last node, then move backward.",reason:"Sequential rationality must hold in every subgame."},
{phrase:"Induce the agent to exert effort",operation:"Write participation and incentive-compatibility constraints.",equation:"IR: U(e*) ≥ Ū; IC: U(e*) ≥ U(e')",reason:"Acceptance and effort choice are distinct incentive requirements."}
];
function getItems(){return ITEMS.map(x=>({...x}));}
function evaluate(index,answer){const x=ITEMS[index];return !!x&&answer===x.equation;}
const api={getItems,evaluate};if(typeof module!=="undefined"&&module.exports)module.exports=api;root.GameTheoryQuiz=api;
})(typeof globalThis!=="undefined"?globalThis:this);