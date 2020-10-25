import React, { useState } from 'react';
import Dummy from './Dummy';
import Counter from './Counter';
import Slider from './Slider';
import ColorPicker from './ColorPicker';
import './styles.css';
import ControlCard from './ControlCard';
import Button from './Button';

export default function App() {
	const [border, setBorder] = useState({
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
		borderBottomLeftRadius: 0,
		borderWidth: 0,
		borderColor: '#F0CEF2',
	});
	const [allCornerChange, setAllCornerChange] = useState(false);

	const [showClipboardDummyInput, setShowClipboardDummyInput] = useState(
		false
	);

	const [elementCount, setElementCount] = useState(1);
	const [layout, setLayout] = useState('flex');
	const [direction, setDirection] = useState('column');
	const [columns, setColumns] = useState(1);

	const [colors, setColors] = useState({
		color: '#ffffff',
		background1: '#486ec4',
		background2: '#8860f4',
	});

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
					borderTopLeftRadius: `${border.borderTopLeftRadius}${units}`,
					borderTopRightRadius: `${border.borderTopRightRadius}${units}`,
					borderBottomRightRadius: `${border.borderBottomRightRadius}${units}`,
					borderBottomLeftRadius: `${border.borderBottomLeftRadius}${units}`,
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
					backgroundType === 'solid'
						? colors.background1
						: `linear-gradient(${gradientAngle}deg, ${colors.background1} 0 %, ${colors.background2} ${effectiveMidpoint}%)`
				};
			width: ${size.width}px;
			height: ${size.height}px;
			border-top-left-radius: ${border.borderTopLeftRadius}${units};
			border-top-right-radius: ${border.borderTopRightRadius}${units};
			border-bottom-right-radius: ${border.borderBottomRightRadius}${units};
			border-bottom-left-radius: ${border.borderBottomLeftRadius}${units};
			border: ${border.borderWidth}px solid ${border.borderColor};
		}
		`;
		setShowClipboardDummyInput(true);
		setTimeout(() => {
			let dummy = document.getElementById('dummy-input');
			dummy.value = cssText;
			dummy.select();
			document.execCommand('copy', true);
			setShowClipboardDummyInput(false);
		}, 100);
	};

	const fields = {
		width: {
			label: 'Width',
			name: 'width',
			type: 'combo',
			value: size.width,
			onChange: (e) => setSize({ ...size, width: e.target.value }),
			max: 1000,
		},
		height: {
			label: 'Height',
			name: 'height',
			type: 'combo',
			value: size.height,
			onChange: (e) => setSize({ ...size, height: e.target.value }),
			max: 1000,
		},
		widthHeightLock: {
			label: ['Lock', 'Unlock'],
			name: 'widthHeightLock',
			type: 'toggle',
			value: checkboxChecked,
			onChange: () => setCheckboxChecked((c) => !c),
		},
		borderTopLeftRadius: {
			onChange: (e) => handleSetBorderRadius(e),
			name: 'borderTopLeftRadius',
			value: border.borderTopLeftRadius,
			max: 200,
			label: 'Border Top Left Radius',
			type: 'slider',
		},
		borderTopRightRadius: {
			onChange: (e) => handleSetBorderRadius(e),
			name: 'borderTopRightRadius',
			value: border.borderTopRightRadius,
			max: 200,
			label: 'Border Top Right Radius',
			type: 'slider',
		},
		borderBottomRightRadius: {
			onChange: (e) => handleSetBorderRadius(e),
			name: 'borderBottomRightRadius',
			value: border.borderBottomRightRadius,
			max: 200,
			label: 'Border Bottom Right Radius',
			type: 'slider',
		},
		borderBottomLeftRadius: {
			onChange: (e) => handleSetBorderRadius(e),
			name: 'borderBottomLeftRadius',
			value: border.borderBottomLeftRadius,
			max: 200,
			label: 'Border Bottom Left Radius',
			type: 'slider',
		},
		borderRadiusLock: {
			label: ['Lock', 'Unlock'],
			name: 'widthHeightLock',
			type: 'toggle',
			value: allCornerChange,
			onChange: () => setAllCornerChange((c) => !c),
		},
	};

	return (
		<div
			className="App"
			style={{
				display: 'flex',
				flexDirection: 'row',
			}}
		>
			<div className="spacer" />
			<div className="fields">
				<ControlCard
					fields={[
						fields.width,
						fields.widthHeightLock,
						fields.height,
					]}
				/>
				<ControlCard
					fields={[
						fields.borderTopLeftRadius,
						fields.borderTopRightRadius,
						fields.borderBottomRightRadius,
						fields.borderBottomLeftRadius,
					]}
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
				className="preview-container"
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
						flexWrap: 'wrap',
						gridTemplateColumns: `repeat(${columns}, 1fr)`,
						gap: `${gridGap.rowGap}px ${gridGap.columnGap}px`,
						justifyContent: 'center',
						alignItems: 'center',
						height: layout === 'flex' ? '100vh' : 'auto',
						width: '100%',
						padding: 80,
						boxSizing: 'border-box',
					}}
				>
					{mapElements()}
				</div>
			</div>
			<Button
				onClick={handleCopyCss}
				label="Copy CSS"
				className="fixed-bottom-right"
			/>
			{showClipboardDummyInput && <Dummy />}
		</div>
	);
}

// todo
// random button
