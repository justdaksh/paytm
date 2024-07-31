
import { useRecoilValue } from "recoil";
import {
  firstnameAtom,
  lastnameAtom,
  usernameAtom,
} from "../../state/atom";
import { BalanceComponent } from "./BalanceComponent";
import { Logout } from "../Auth/Logout";

export function DashBar() {
  const firstname = useRecoilValue(firstnameAtom);
  const lastname = useRecoilValue(lastnameAtom);
  const username = useRecoilValue(usernameAtom);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center">
        <div className="font-bold text-2xl text-gray-800">Paytm App</div>
        <BalanceComponent />
        <div className="flex items-center space-x-4">
          <div className="font-semibold text-xl text-gray-700">
            Hello, {username}
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center text-lg font-semibold">
            {firstname.substring(0, 1).toUpperCase() +
              lastname.substring(0, 1).toUpperCase()}
          </div>
          <div>
            <Logout />
          </div>
        </div>
      </div>
    </div>
  );
}
