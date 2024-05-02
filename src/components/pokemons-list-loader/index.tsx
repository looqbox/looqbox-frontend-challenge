import { Col, Row, Skeleton } from 'antd';

import './styles.css';

function PokemonsListLoader() {

	const skeletons = Array.from({length: 9}, (_, index) => (
		<Col 
			span={12} 
			lg={8}
			key={`skeleton-${index}`}
		>
			<div className="skeleton-pokemon-card">
				<div className='skeletons-wrapper'>
					<Skeleton.Input active={true} style={{width: 32, marginBottom: 16}} block size='small'/>
					<Skeleton.Input active={true} style={{width: 32, marginBottom: 16}} block/>
					<Skeleton.Input active={true} block size='small'/>
				</div>
				<Skeleton.Image active={true} />
			</div>
		</Col>
	));

	return (
		<Row gutter={[16, 24]}>
			{skeletons}
		</Row>
	);
}

export default PokemonsListLoader;