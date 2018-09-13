/**
 * Created by sailengsi on 2017/5/10.
 */

import Login from './login/'
import Function from './function/'
// import Adv from './adv/'
// import Demo from './demo/'
// import Components from './components/'
import Sys from './sys/'
import Finsys from './finsys/'
import Opesys from './opesys/'
import Repsys from './repsys/'

export { Login, Sys, Function, Finsys, Opesys, Repsys, alias }

const alias = {
  role: Sys.User.Role,
  menu: Sys.User.Menu,
  user: Sys.User.User,
  merch: Opesys.Ope.Merch,
  store: Opesys.Ope.Store,
  term: Opesys.Ope.Term,
  income: Finsys.Fin.Income,
  out: Finsys.Fin.Out,
  err: Finsys.Fin.Err,
  day: Repsys.Rep.Day,
  month: Repsys.Rep.Month,
  mcc: Repsys.Rep.Mcc,
  region: Repsys.Rep.Region
}
