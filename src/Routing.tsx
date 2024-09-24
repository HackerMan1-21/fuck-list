import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Demo from "./components/Demo";
import AllList from "./components/AllList";
import BluRayDiscList from "./components/BluRayDiscList";
import DigitalVersatileDiskList from "./components/DigitalVersatileDiskList";
import VideoHomeSystemList from "./components/VideoHomeSystemList";

function Routing() {
	return (
		<Suspense fallback={<>Loading...</>}>
			<Routes>
				<Route path="/" element={<Demo />} />
				<Route path="/all/list" element={<AllList />} />
				<Route path="/all/regist" element={<AllNew />} />
				<Route path="/all/:id" element={<AllEdit />} />
				<Route path="/bluray/list" element={<BluRayDiscList />} />
				<Route path="/bluray/regist" element={<BluRayDiscNew />} />
				<Route path="/bluray/:id" element={<BluRayDiscEdit />} />
				<Route path="/dvd/list" element={<DigitalVersatileDiskList />} />
				<Route path="/dvd/regist" element={<DigitalVersatileDiskNew />} />
				<Route path="/dvd/:id" element={<DigitalVersatileDiskEdit />} />
				<Route path="/vhs/list" element={<VideoHomeSystemList />} />
				<Route path="/vhs/regist" element={<VideoHomeSystemNew />} />
				<Route path="/vhs/:id" element={<VideoHomeSystemEdit />} />
			</Routes>
		</Suspense>
	);
}
export default Routing;
