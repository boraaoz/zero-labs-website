import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import SectionHeaders from './partials/SectionHeader';


const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'About Us',
    paragraph: 'Zero Labs is the leading provider of development, research, and design services for blockchain technology. Our team of experts have extensive experience in developing and implementing cutting-edge solutions that leverage the power of blockchain to transform businesses and industries. With a focus on delivering high-quality, reliable, and scalable solutions, we work closely with our clients to understand their needs and design tailored solutions that meet their specific requirements.'
  };
  
  
  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
      <div className="containers">

          <SectionHeader data={sectionHeader} className="center-content" />



        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;