import { useRef } from "react";
import type { RefObject } from "react";
import "react-rangeslider/lib/index.css";
import { toggleWIFI } from "~/redux/slices";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { useClickOutside } from "~/hooks";

interface WifiMenuProps {
  toggleWifiMenu: () => void;
  btnRef: RefObject<HTMLDivElement>;
}

export default function WifiMenu({ toggleWifiMenu, btnRef }: WifiMenuProps) {
  const wifi = useAppSelector((state) => state.system.wifi);
  const dispatch = useAppDispatch();
  const wifiRef = useRef<HTMLDivElement>(null);

  useClickOutside(wifiRef, toggleWifiMenu, [btnRef]);

  return (
    <div
      className="menu-box flex gap-2 h-11 w-80 max-w-full right-0 sm:right-2 px-2 py-0.5"
      ref={wifiRef}
    >
      <div className="w-4/5 p-2.5 font-medium">Wi-Fi</div>
      <div className="w-1/5 py-2 text-center">
        <label className="switch-toggle">
          <input
            type="checkbox"
            checked={wifi}
            onChange={() => dispatch(toggleWIFI(!wifi))}
          />
          <span className="slider-toggle" />
        </label>
      </div>
    </div>
  );
}
