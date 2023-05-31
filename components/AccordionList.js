import React, { useState } from 'react';
import Accordion from '@/components/Accordion';
import CustomPortableText from '@/components/CustomPortableText';

const AccordionList = ({ data }) => {
	const { items } = data;
	const [activeAccordion, setActiveAccordion] = useState(null);

	const onToggle = (id, status) => {
		setActiveAccordion(status ? id : null);
	};

	return (
		<div className="accordion-group">
			{items.map((accordion, key) => {
				return (
					<Accordion
						key={key}
						id={accordion.id}
						isOpen={accordion.id === activeAccordion}
						onToggle={onToggle}
						title={accordion.title}
					>
						<CustomPortableText blocks={accordion.content} />
					</Accordion>
				);
			})}
		</div>
	);
};

export default AccordionList;
