import React, { useState } from 'react';
import './styles.css';

export default function App() {
	const [dimensions, setDimensions] = useState({
		width: 240,
		height: 240,
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
		borderBottomLeftRadius: 0,
	});

	const [border, setBorder] = useState({
		borderWidth: 0,
		borderColor: '#F0CEF2',
	});

	const [allCorners, setAllCorners] = useState(0);

	const [elementCount, setElementCount] = useState(1);
	const [layout, setLayout] = useState('flex');
	const [direction, setDirection] = useState('column');
	const [columns, setColumns] = useState(1);
	const [allCornerChange, setAllCornerChange] = useState(false);

	const [colors, setColors] = useState({
		color: '#ffffff',
		background1: '#486ec4',
		background2: '#8860f4',
	});

	const handleSliderChange = (e) => {
		if (allCornerChange) {
			setDimensions({
				...dimensions,
				borderTopLeftRadius: e.target.value,
				borderTopRightRadius: e.target.value,
				borderBottomRightRadius: e.target.value,
				borderBottomLeftRadius: e.target.value,
			});
		} else {
			setDimensions({
				...dimensions,
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

	const handleColorChange = (e) => {
		setColors({
			...colors,
			[e.target.name]: e.target.value,
		});
	};

	const [size, setSize] = useState({
		width: 120,
		height: 120,
	});
	const [checkboxChecked, setCheckboxChecked] = useState(false);
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

	const handleSizeChange = (e) => {
		if (checkboxChecked) {
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

	const [units, setUnits] = useState('px');
	const [backgroundType, setBackgroundType] = useState('solid');
	const [gradientMidpoint, setGradientMidpoint] = useState(50);
	const [gradientAngle, setGradientAngle] = useState(90);
	const [effectiveMidpoint, setEffectiveMidpoint] = useState(100);

	const handleSetGradientMidpoint = (e) => {
		let val = e.target.value;
		setGradientMidpoint(val);
		setEffectiveMidpoint(val * 2);
	};

	const mapElements = () => {
		let el = (
			<div
				style={{
					background:
						backgroundType === 'solid'
							? `${colors.background1}`
							: `linear-gradient(${gradientAngle}deg, ${colors.background1} 0%, ${colors.background2} ${effectiveMidpoint}%)`,
					width: `${size.width}px`,
					height: `${size.height}px`,
					borderTopLeftRadius: `${dimensions.borderTopLeftRadius}${units}`,
					borderTopRightRadius: `${dimensions.borderTopRightRadius}${units}`,
					borderBottomRightRadius: `${dimensions.borderBottomRightRadius}${units}`,
					borderBottomLeftRadius: `${dimensions.borderBottomLeftRadius}${units}`,
					border: `${border.borderWidth}px solid ${border.borderColor}`,
				}}
			/>
		);
		let elArray = [];
		for (let i = 0; i < elementCount; i++) {
			elArray.push(el);
		}
		return elArray.map((ele) => el);
	};

	return (
		<div
			className="App"
			style={{
				display: 'flex',
				flexDirection: 'row',
			}}
		>
			<div
				className="spacer"
				style={{
					width: '50vw',
					height: '100vh',
					background: 'white',
				}}
			/>
			<div
				style={{
					width: 'fit-content',
					position: 'fixed',
					height: '100vh',
					maxWidth: '50vw',
					top: 0,
					left: 0,
					overflow: 'scroll',
				}}
			>
				<Slider
					onChange={handleSizeChange}
					name={'width'}
					value={size.width}
					max={1000}
				/>
				<label>Lock</label>
				<input
					type="checkbox"
					checked={checkboxChecked}
					onChange={() => setCheckboxChecked((c) => !c)}
				/>
				<Slider
					onChange={handleSizeChange}
					name={'height'}
					value={size.height}
					max={1000}
				/>
				<Slider
					onChange={handleSliderChange}
					name={'borderTopLeftRadius'}
					value={dimensions.borderTopLeftRadius}
					max={200}
				/>
				<Slider
					onChange={handleSliderChange}
					name={'borderTopRightRadius'}
					value={dimensions.borderTopRightRadius}
					max={200}
				/>
				<Slider
					onChange={handleSliderChange}
					name={'borderBottomRightRadius'}
					value={dimensions.borderBottomRightRadius}
					max={200}
				/>
				<Slider
					onChange={handleSliderChange}
					name={'borderBottomLeftRadius'}
					value={dimensions.borderBottomLeftRadius}
					max={200}
				/>
				<label>Lock</label>
				<input
					type="checkbox"
					checked={allCornerChange}
					onChange={() => setAllCornerChange((ac) => !ac)}
				/>
				<fieldset>
					<legend>Border Radius Units</legend>
					<label>px</label>
					<input
						type="radio"
						value="px"
						checked={units === 'px'}
						defaultChecked
						onChange={() => setUnits('px')}
					/>
					&nbsp; &nbsp; &nbsp; &nbsp;
					<label>%</label>
					<input
						type="radio"
						value="%"
						checked={units === '%'}
						onChange={() => setUnits('%')}
					/>
				</fieldset>
				<Slider
					onChange={handleBorderChange}
					name={'borderWidth'}
					value={border.borderWidth}
					max={99}
				/>
				<Slider
					onChange={handleGapChange}
					name={'rowGap'}
					value={gridGap.rowGap}
					max={200}
				/>
				<label>Lock</label>
				<input
					type="checkbox"
					checked={gridLock}
					onChange={() => setGridLock((g) => !g)}
				/>
				<Slider
					onChange={handleGapChange}
					name={'columnGap'}
					value={gridGap.columnGap}
					max={200}
				/>
				<ColorPicker
					name="borderColor"
					value={border.borderColor}
					onChange={handleBorderChange}
				/>
				<fieldset>
					<legend>Background</legend>
					<label>Solid Color</label>
					<input
						type="radio"
						value="solid"
						checked={backgroundType === 'solid'}
						onChange={() => setBackgroundType('solid')}
					/>
					&nbsp; &nbsp; &nbsp; &nbsp;
					<label>Gradient</label>
					<input
						type="radio"
						value="gradient"
						checked={backgroundType === 'gradient'}
						defaultChecked
						onChange={() => setBackgroundType('gradient')}
					/>
				</fieldset>
				<ColorPicker
					name="background1"
					value={colors.background1}
					onChange={handleColorChange}
				/>
				{backgroundType === 'gradient' && (
					<>
						<ColorPicker
							name="background2"
							value={colors.background2}
							onChange={handleColorChange}
						/>
						<Slider
							name="midpoint"
							onChange={handleSetGradientMidpoint}
							value={gradientMidpoint}
							max={100}
						/>
						<Slider
							name="angle"
							onChange={(e) => setGradientAngle(e.target.value)}
							value={gradientAngle}
							max={360}
						/>
					</>
				)}
				<Counter
					name="Box Count"
					value={elementCount}
					onChange={(e) => setElementCount(e.target.value)}
					max={99}
				/>
				<fieldset>
					<legend>Layout</legend>
					<label>Flex</label>
					<input
						type="radio"
						value="flex"
						checked={layout === 'flex'}
						defaultChecked
						onChange={() => setLayout('flex')}
					/>
					&nbsp; &nbsp; &nbsp; &nbsp;
					<label>Grid</label>
					<input
						type="radio"
						value="grid"
						checked={layout === 'grid'}
						onChange={() => setLayout('grid')}
					/>
				</fieldset>
				{layout === 'flex' ? (
					<fieldset>
						<legend>Direction</legend>
						<label>Row</label>
						<input
							type="radio"
							value="row"
							checked={direction === 'row'}
							onChange={() => setDirection('row')}
						/>
						&nbsp; &nbsp; &nbsp; &nbsp;
						<label>Column</label>
						<input
							type="radio"
							value="column"
							checked={direction === 'column'}
							defaultChecked
							onChange={() => setDirection('column')}
						/>
					</fieldset>
				) : (
					<Counter
						onChange={(e) => setColumns(e.target.value)}
						name={'columns'}
						value={columns}
						max={40}
					/>
				)}
			</div>
			<div
				style={{
					width: '50vw',
					minHeight: '100vw',
					overflow: 'scroll',
				}}
			>
				<div
					style={{
						display: `${layout}`,
						flexDirection: direction,
						gridTemplateColumns: `repeat(${columns}, 1fr)`,
						gap: `${gridGap.rowGap}px ${gridGap.columnGap}px`,
						justifyContent: 'center',
						alignItems: 'center',
						height: 'auto',
						width: '100%',
						padding: 80,
						boxSizing: 'border-box',
					}}
				>
					{mapElements()}
				</div>
			</div>
		</div>
	);
}

const Slider = (props) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'flex-start',
				alignItems: 'center',
				width: '800px',
			}}
		>
			<p style={{ textAlign: 'right', width: 200 }}> {props.name}</p>
			<input
				type="range"
				name={props.name}
				value={props.value}
				min={0}
				max={props.max}
				onChange={props.onChange}
			/>
			<p style={{ textAlign: 'left', width: 80 }}> {props.value}</p>
		</div>
	);
};

const ColorPicker = (props) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'flex-start',
				alignItems: 'center',
				width: '800px',
			}}
		>
			<p style={{ textAlign: 'right', width: 200 }}> {props.name}</p>
			<input
				type="color"
				name={props.name}
				value={props.value}
				onChange={props.onChange}
			/>
			<p style={{ textAlign: 'left', width: 80 }}> {props.value}</p>
		</div>
	);
};

const Counter = (props) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'flex-start',
				alignItems: 'center',
				width: '800px',
			}}
		>
			<p style={{ textAlign: 'right', width: 200 }}> {props.name}</p>
			<input
				type="number"
				name={props.name}
				value={props.value}
				onChange={props.onChange}
			/>
			<p style={{ textAlign: 'left', width: 80 }}> {props.value}</p>
		</div>
	);
};
