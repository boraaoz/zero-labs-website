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
    title: 'Team',
    paragraph: 'As Zero Labs team, we believe in the potential of blockchain technology to revolutionize the way we interact and transact with each other, and we are dedicated to making that potential a reality. Furthermore, we are committed to excellence in everything we do, and our team is no exception. If you are looking for a partner who can deliver top notch blockchain solutions and provide outstanding customer service, look no further than our talented and dedicated team.' 
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