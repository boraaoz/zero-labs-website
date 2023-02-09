import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
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
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Services',  
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className='containers'>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Research  
                    </h4>
                  <p className="m-0 text-sm">
                  Our team of experts conducts in-depth research and analysis to provide valuable insights and recommendations on how blockchain technology can be leveraged to drive business growth and success. Whether you're looking to explore new use cases for blockchain or to stay up-to-date on the latest developments, our research services are designed to give you the information and knowledge you need to succeed.                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
           
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Development
                    </h4>
                  <p className="m-0 text-sm">
                  Highly-skilled developers at Zero Labs have extensive experience in developing blockchain-based applications, platforms, and solutions that drive business growth and success. Our development services are designed to be flexible and customized to meet the unique requirements of each of our clients. From conceptualization to deployment, we work closely with our clients to ensure that their vision becomes a reality.                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-1a6">
                    <div className='iconto'>
                
                  </div>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Design
                    </h4>
                  <p className="m-0 text-sm">
                  We offer professional design services that help businesses create an impactful and engaging online presence through their website and graphic design needs, especially for the fast-paced and competitive world of blockchain technology. Our team of experienced designers specialize in creating custom designs that reflect the unique vision and brand of each of our clients. From website design to graphic design, we take a collaborative approach, working closely with our clients to ensure that the end result not only looks great, but is also user-friendly and aligned with their business goals.                    </p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;