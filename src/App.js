import React, { useContext, useEffect, useState } from "react";
import Dummy from "./Dummy";
import Counter from "./Inputs/Counter/Counter";
import Slider from "./Inputs/Slider/Slider";
import ColorPicker from "./Inputs/ColorPicker/ColorPicker";
import "./main.scss";
import ControlCard from "./Cards/ControlCard/ControlCard";
import Button from "./Common/Buttons/Button/Button";
import Header from "./Header";
import Snackbar from "./Common/Snackbar/Snackbar";

export const DarkMode = React.createContext('--light');

export default function App() {
	const isDarkMode = useContext(DarkMode);
	const [border, setBorder] = useState({
		borderTopLeftRadius: 16,
		borderTopRightRadius: 16,
		borderBottomRightRadius: 16,
		borderBottomLeftRadius: 16,
	});
	const [allCornerChange, setAllCornerChange] = useState(false);
	const [showSnackbar, setShowSnackbar] = useState(false);

	const [showClipboardDummyInput, setShowClipboardDummyInput] = useState(
		false
	);

	const [elementCount, setElementCount] = useState(1);
	const [layout, setLayout] = useState("grid");
	const [direction, setDirection] = useState("column");
	const [columns, setColumns] = useState(1);

	const [color1, setColor1] = useState("#8976FF");
	const [color2, setColor2] = useState("#F476FF");

	const handleSetBorderRadius = (e) => {
		if (allCornerChange) {
			setBorder({
				...border,
				borderTopLeftRadius: e.target.value,
				borderTopRightRadius: e.target.value,
				borderBottomRightRadius: e.target.value,
				borderBottomLeftRadius: e.target.value,
			});
		} else {
			setBorder({
				...border,
				[e.target.name]: e.target.value,
			});
		}
	};

	const handleBorderChange = (e) => {
		setBorder({
			...border,
			[e.target.name]: e.target.value,
		});
	};

	const [size, setSize] = useState({
		width: 120,
		height: 120,
	});
	const [widthHeightLock, setWidthHeightLock] = useState(true);
	const [gridGap, setGridGap] = useState({
		rowGap: 8,
		columnGap: 8,
	});

	const [gridLock, setGridLock] = useState(false);

	const handleGapChange = (e) => {
		if (gridLock) {
			setGridGap({
				rowGap: e.target.value,
				columnGap: e.target.value,
			});
		} else {
			setGridGap({
				...gridGap,
				[e.target.name]: e.target.value,
			});
		}
	};

	const handleSetSize = (e) => {
		if (widthHeightLock) {
			setSize({
				width: e.target.value,
				height: e.target.value,
			});
		} else {
			setSize({
				...size,
				[e.target.name]: e.target.value,
			});
		}
	};

	const [units, setUnits] = useState("px");
	const [isPx, setIsPx] = useState(true);
	const [layoutChecked, setLayoutChecked] = useState(true);
	const [backgroundType, setBackgroundType] = useState("solid");
	const [gradientMidpoint, setGradientMidpoint] = useState(50);
	const [gradientAngle, setGradientAngle] = useState(90);
	const [effectiveMidpoint, setEffectiveMidpoint] = useState(100);

	const handleSetGradientMidpoint = (e) => {
		let val = e.target.value;
		setGradientMidpoint(val);
		setEffectiveMidpoint(val * 2);
	};

	const handleSetLayout = () => {
		if (layoutChecked) {
			setLayout("flex");
			setLayoutChecked(false);
		} else {
			setLayout("grid");
			setLayoutChecked(true);
		}
	};

	useEffect(() => {
		if (isPx) {
			setUnits("px");
		} else {
			setUnits("%");
		}
	}, [isPx]);

	const mapElements = () => {
		let el = (
			<div
				style={{
					background: fillIsGradient
						? `linear-gradient(${gradientAngle}deg, ${color1} 0%, ${color2} ${effectiveMidpoint}%)`
						: `${color1}`,
					width: `${size.width}px`,
					height: `${size.height}px`,
					borderTopLeftRadius: `${border.borderTopLeftRadius}${units}`,
					borderTopRightRadius: `${border.borderTopRightRadius}${units}`,
					borderBottomRightRadius: `${border.borderBottomRightRadius}${units}`,
					borderBottomLeftRadius: `${border.borderBottomLeftRadius}${units}`,
					border: `${borderWidth}px solid ${borderColor}`,
					boxSizing: "border-box",
				}}
			/>
		);
		let elArray = [];
		for (let i = 0; i < elementCount; i++) {
			elArray.push(el);
		}
		return elArray.map((ele) => el);
	};

	const handleCopyCss = () => {
		let cssText = `
		.container {
			display: ${layout};
			flex-direction: ${direction};
			grid-template-columns: repeat(${columns}, 1fr);
			gap: ${gridGap.rowGap}px ${gridGap.columnGap}px;
			justify-content: center;
			align-items: center;
			height: auto;
			width: 100%;
			padding: 80px;
			box-sizing: border-box;
		}

		.block {
			background:
				${
					fillIsGradient
						? `linear-gradient(${gradientAngle}deg, ${color1} 0%, ${color2} ${effectiveMidpoint}%)`
						: color1
				};
			width: ${size.width}px;
			height: ${size.height}px;
			border-top-left-radius: ${border.borderTopLeftRadius}${units};
			border-top-right-radius: ${border.borderTopRightRadius}${units};
			border-bottom-right-radius: ${border.borderBottomRightRadius}${units};
			border-bottom-left-radius: ${border.borderBottomLeftRadius}${units};
			border: ${borderWidth}px solid ${borderColor};
			box-sizing: border-box;
		}
		`;
		setShowClipboardDummyInput(true);
		setShowSnackbar(true);
		setTimeout(() => {
			let dummy = document.getElementById("dummy-input");
			dummy.value = cssText;
			dummy.select();
			document.execCommand("copy", true);
			setShowClipboardDummyInput(false);
		}, 100);
	};

	const [fillIsGradient, setFillIsGradient] = useState(true);
	const [borderWidth, setBorderWidth] = useState(0);
	const [borderColor, setBorderColor] = useState("#F476FF");

	const fields = {
		width: {
			label: "width",
			name: "width",
			type: "combo",
			value: size.width,
			onChange: (e) => handleSetSize(e),
			max: 1000,
		},
		height: {
			label: "height",
			name: "height",
			type: "combo",
			value: size.height,
			onChange: (e) => handleSetSize(e),
			max: 1000,
		},
		widthHeightLock: {
			label: ["free", "lock"],
			name: "widthHeightLock",
			type: "toggle",
			value: widthHeightLock,
			onChange: () => setWidthHeightLock((whl) => !whl),
		},
		borderTopLeftRadius: {
			onChange: (e) => handleSetBorderRadius(e),
			name: "borderTopLeftRadius",
			value: border.borderTopLeftRadius,
			max: 200,
			label: "Border Top Left Radius",
			type: "combo",
		},
		borderTopRightRadius: {
			onChange: (e) => handleSetBorderRadius(e),
			name: "borderTopRightRadius",
			value: border.borderTopRightRadius,
			max: 200,
			label: "Border Top Right Radius",
			type: "combo",
		},
		borderBottomRightRadius: {
			onChange: (e) => handleSetBorderRadius(e),
			name: "borderBottomRightRadius",
			value: border.borderBottomRightRadius,
			max: 200,
			label: "Border Bottom Right Radius",
			type: "combo",
		},
		borderBottomLeftRadius: {
			onChange: (e) => handleSetBorderRadius(e),
			name: "borderBottomLeftRadius",
			value: border.borderBottomLeftRadius,
			max: 200,
			label: "Border Bottom Left Radius",
			type: "combo",
		},
		borderRadiusLock: {
			label: ["free", "lock"],
			name: "widthHeightLock",
			type: "toggle",
			value: allCornerChange,
			onChange: () => setAllCornerChange((c) => !c),
		},
		isPx: {
			label: ["%", "px"],
			name: "units",
			type: "toggle",
			value: isPx,
			onChange: () => setIsPx((p) => !p),
		},
		layout: {
			label: ["flex", "grid"],
			name: "layout",
			type: "toggle",
			value: layoutChecked,
			onChange: (e) => handleSetLayout(e),
		},
		blocks: {
			label: "blocks",
			name: "blocks",
			type: "counter",
			value: elementCount,
			onChange: (e) => setElementCount(e.target.value),
		},
		columns: {
			label: "columns",
			name: "columns",
			type: "counter",
			value: columns,
			onChange: (e) => setColumns(e.target.value),
		},
		columnSpacing: {
			label: "column spacing",
			name: "columnGap",
			type: "combo",
			value: gridGap.columnGap,
			onChange: (e) => handleGapChange(e),
		},
		rowSpacing: {
			label: "row spacing",
			name: "rowGap",
			type: "combo",
			value: gridGap.rowGap,
			onChange: (e) => handleGapChange(e),
		},
		row: {
			label: "row",
			name: "row",
			type: "radio",
			value: direction === "row",
			legend: "flex direction",
			onChange: (e) => setDirection(e.target.value),
		},
		column: {
			label: "column",
			name: "column",
			type: "radio",
			value: direction === "column",
			legend: "flex direction",
			onChange: (e) => setDirection(e.target.value),
		},
		solidGradient: {
			label: ["solid", "linear"],
			name: "backgroundType",
			type: "toggle",
			value: fillIsGradient,
			onChange: () => setFillIsGradient((fg) => !fg),
		},
		color: {
			label: "color",
			name: "background1",
			type: "color",
			value: color1,
			onChange: (e) => setColor1(e.target.value),
		},
		color2: {
			label: "color2",
			name: "background2",
			type: "color",
			value: color2,
			onChange: (e) => setColor2(e.target.value),
		},
		gradientAngle: {
			label: "angle",
			name: "angle",
			type: "combo",
			value: gradientAngle,
			onChange: (e) => setGradientAngle(e.target.value),
			max: 360,
		},
		gradientMidpoint: {
			label: "midpoint",
			name: "gradientMidpoint",
			type: "combo",
			value: gradientMidpoint,
			onChange: (e) => handleSetGradientMidpoint(e),
			max: 100,
		},
		borderWidth: {
			label: "stroke",
			name: "borderWidth",
			type: "combo",
			value: borderWidth,
			onChange: (e) => setBorderWidth(e.target.value),
			max: 40,
		},
		borderColor: {
			label: "border color",
			name: "borderColor",
			type: "color",
			value: borderColor,
			onChange: (e) => setBorderColor(e.target.value),
		},
	};

	const [darkMode, setDarkMode] = useState(false);
	const [theme, setTheme] = useState(darkMode ? '--dark' : '--light')

	useEffect(() => {
		if (darkMode) {
			setTheme(() => '--dark')
		} else {
			setTheme(() => '--light')
		}
	}, [darkMode])

	return (
		<DarkMode.Provider value={theme}>
			<div
				className={`app ${theme}`}
				style={{
					display: "flex",
					flexDirection: "column",
				}}
			>
				<Header
					darkMode={darkMode}
					toggleDarkMode={() => setDarkMode((d) => !d)}
				/>
				<section
					className={`main-container ${theme}`}
					style={{
						display: "flex",
						flexDirection: "row",
					}}
				>
					<div className={`fields ${theme}`}>
						<ControlCard
							fields={
								layout === "grid"
									? [
											fields.layout,
											fields.blocks,
											fields.columns,
											fields.rowSpacing,
											fields.columnSpacing,
									  ]
									: [
											fields.layout,
											fields.blocks,
											fields.row,
											fields.column,
											fields.rowSpacing,
											fields.columnSpacing,
									  ]
							}
							cardLabel='size'
						/>
						<ControlCard
							fields={[
								fields.width,
								fields.widthHeightLock,
								fields.height,
							]}
							cardLabel='size'
						/>
						<ControlCard
							fields={
								fillIsGradient
									? [
											fields.solidGradient,
											fields.color,
											fields.color2,
											fields.gradientAngle,
											fields.gradientMidpoint,
									  ]
									: [fields.solidGradient, fields.color]
							}
							cardLabel='fill'
						/>
						<ControlCard
							fields={[
								fields.isPx,
								fields.borderRadiusLock,
								fields.borderTopLeftRadius,
								fields.borderTopRightRadius,
								fields.borderBottomRightRadius,
								fields.borderBottomLeftRadius,
							]}
							cardLabel='border radius'
						/>
						<ControlCard
							fields={[fields.borderWidth, fields.borderColor]}
							cardLabel='stroke'
						/>
					</div>
					<div className={`preview-container ${theme}`}>
						<div
							style={{
								display: `${layout}`,
								flexDirection: direction,
								flexWrap: "wrap",
								gridTemplateColumns: `repeat(${columns}, auto)`,
								gap: `${gridGap.rowGap}px ${gridGap.columnGap}px`,
								justifyContent: "flex-start",
								alignItems: "flex-start",
								height: layout === "flex" ? "100%" : "auto",
								width: layout === "flex" ? "100%" : "auto",
								boxSizing: "border-box",
							}}
						>
							{mapElements()}
						</div>
					</div>
					<Button
						onClick={handleCopyCss}
						label='Copy CSS'
						className='fixed-bottom-right css-butt'
					/>
					{showClipboardDummyInput && <Dummy />}
					{showSnackbar && (
						<Snackbar
							message='Copied!'
							show={showSnackbar}
							hide={() => setShowSnackbar(false)}
						/>
					)}
				</section>
			</div>
		</DarkMode.Provider>
	);
}
