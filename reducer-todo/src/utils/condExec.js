import { cond, executeOrReturn } from ".";

const condExec = cases => defaultCase => key =>
  executeOrReturn(cond(cases)(defaultCase)(key));

export default condExec;
