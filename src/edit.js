import { __ } from '@wordpress/i18n';
import React from 'react';
import { useBlockProps, InspectorControls, __experimentalBlockVariationPicker as BlockVariationPicker } from '@wordpress/block-editor';
import { TextControl, PanelBody, Button, FontSizePicker, PanelRow, ColorPalette,__experimentalNumberControl as NumberControl, FormToggle, __experimentalImageSizeControl as ImageSizeControl} from '@wordpress/components';
import './BlockVariation.scss';





export default function Edit({ attributes: { 
  selectedCPT, 
  CPTPosts, 
  selectedTax, 
  termArray, 
  sortedTax, 
  selectedVariation, 
  selectedLayout,

  PostBorder,
  PostBorderColor,
  PostBorderRadius,
  PostBorderThick,
  PostBgColor,
  PostPadding,
  PostMargin,
  
  TitleColor,
  TitleFontSize,
  TitleMargin,
  TitlePadding,

  ContentColor,
  ContentFontSize,
  ContentMargin,
  ContentPadding

  }, 
  setAttributes}) {
  const [data, setData] = React.useState([]);



  const PostStyling = {
    border: PostBorderThick + "px solid " + PostBorderColor,
    borderRadius: PostBorderRadius + "px",
    backgroundColor: PostBgColor,
    padding: PostPadding + "px",
    margin: PostMargin + "px"

  }

  const TitleStyling = {
    color: TitleColor,
    fontSize: TitleFontSize + "px",
    margin: TitleMargin + "px",
    padding: TitlePadding + "px",
  }

  const ContentStyling = {
    color: ContentColor,
    fontSize: ContentFontSize + "px",
    margin: ContentMargin + "px",
    padding: ContentPadding + "px"
  }


  // Custom Posttype


  function updateCPT(value) {
    setAttributes({ selectedCPT: value });
  }

  function updateDataValue(newDataValue) {
    setAttributes({ CPTPosts: newDataValue });
    console.log(CPTPosts);
    
  }

  React.useEffect(() => {
    if (selectedCPT) {
      const api_url = `/wp-json/wp/v2/${selectedCPT}/`;
      fetch(api_url)
        .then(response => {
          console.log(response);
          
          return response.json();
        })
        .then(data => {
          setData(data);
          updateDataValue(data);
          console.log(data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [selectedCPT]);





  // taxonomies

  function updateTax(value) {
    const sortedTaxonomies = value.toString();
    setAttributes({ selectedTax: sortedTaxonomies });
    setAttributes({ sortedTax: sortedTaxonomies.split(',') });
  }

  function updateTaxArray(value) {
    setAttributes({ termArray: value });
  }

  React.useEffect(() => {
    if (sortedTax && sortedTax.length > 0) {
      const collectedTerms = [];
      const fetchTerms = async () => {
        for (const tax of sortedTax) {
          const api_url = `/wp-json/wp/v2/${tax}/`;
          try {
            const response = await fetch(api_url);
            const data = await response.json();
            data.forEach(term => {
              collectedTerms.push(term);
            });
          } catch (error) {
            console.error(error);
          }
        }
        updateTaxArray(collectedTerms);
      };
      fetchTerms();
    }
  }, [sortedTax]);

  



  const variations = [
    {
      name: 'Grid',
      title: 'Grid',
      css: 'gridview',
    },
    {
      name: 'Listview',
      title: 'Listview',
      css: "listview",
      
    }
  ];


  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        
        <PanelBody>
          <TextControl
            label="Custom Post Type Slug"
            value={selectedCPT}
            onChange={e => updateCPT(e)}
            type="text"
          />

          <TextControl
            label="Taxonomy slugs * separate with comma, no space *"
            value={selectedTax}
            onChange={e => updateTax(e)}
            type="text"
          />
            
        </PanelBody>



        
        <PanelBody title="Post Styling" initialOpen={ false } >


        <BlockVariationPicker
          variations={variations}
          value={selectedVariation}
          onSelect={(variation) => {
            setAttributes({ selectedVariation: variation })
            setAttributes({ selectedLayout: variation['css']});
          }}
      />


          {/* ********************* */}
          {/* Post Styling  */}
          {/* ********************* */}

          <PanelBody title="Post Attributes" initialOpen={ false }>
            <PanelRow></PanelRow>        
            
            <PanelBody title="Post Border" initialOpen={ false }>
              <p>Has border:</p>
              <FormToggle
                checked={ PostBorder }
                onChange={ (e) => setAttributes({PostBorder: e}) }
                
              />
              <PanelRow></PanelRow>  
              <ColorPalette
                colors={ [
                  { name: 'red', color: '#f00' },
                  { name: 'white', color: '#fff' },
                  { name: 'blue', color: '#00f' },
                ] }
                value={PostBorderColor}
                style={{width: "150px" }}
                onChange={(color) => setAttributes({PostBorderColor: color })}
              />

              <NumberControl
                isShiftStepEnabled={ true }
                onChange={ thick => setAttributes({PostBorderThick: thick}) }
                shiftStep={ 1}
                value={ PostBorderThick }
                style={{width: "200px"}}
                label="Border Thickness"
                
              />
              <NumberControl
                isShiftStepEnabled={ true }
                onChange={ e => setAttributes({PostBorderRadius: e }) }
                shiftStep={ 1 }
                min={1}
                max={1000}
                value={ PostBorderRadius }
                style={{width: "200px"}}
                label="Border Radius"


              />
            
            </PanelBody>
            <PanelRow></PanelRow>  
                <p>BackgroundColor:</p>
            <ColorPalette
                colors={ [
                  { name: 'red', color: '#f00' },
                  { name: 'white', color: '#fff' },
                  { name: 'blue', color: '#00f' },
                ] }
                value={ PostBgColor}
                style={{width: "150px" }}
                onChange={(color) => setAttributes({PostBgColor: color})}
              />
            
            
            <NumberControl
              isShiftStepEnabled={ true }
              onChange={ e => setAttributes({PostPadding: e}) }
              shiftStep={ 10 }
              value={ PostPadding }
              style={{width: "100px"}}
              label="Padding"
            />
            <NumberControl
              isShiftStepEnabled={ true }
              onChange={ e => setAttributes({PostMargin: e}) }
              shiftStep={ 10 }
              value={ PostMargin }
              style={{width: "100px"}}
              label="Margin"
            />
            
          
          </PanelBody>

          {/* ********************* */}
          {/* Title Styling */}
          {/* ********************* */}


          <PanelBody title="Title" initialOpen={ false }>
            <PanelRow></PanelRow>        
            <FontSizePicker
                  fontSizes={[
                    {
                      name: __( 'Small' ),
                      slug: 'small',
                      size: 12,
                    },
                    {
                      name: __( 'Large' ),
                      slug: 'large',
                      size: 26,
                    },
                  ]}
                  value={ TitleFontSize }
                  fallbackFontSize={ 12 }
                  onChange={(size) => setAttributes({TitleFontSize: size})}
                  withSlider
            />

            <ColorPalette
              colors={ [
                { name: 'red', color: '#f00' },
                { name: 'white', color: '#fff' },
                { name: 'blue', color: '#00f' },
              ] }
              value={ TitleColor }
              style={{width: "150px" }}
              onChange={(color) => setAttributes({TitleColor: color})}
            />

            <NumberControl
              isShiftStepEnabled={ true }
              onChange={ e => setAttributes({TitlePadding: e}) }
              shiftStep={ 10 }
              value={ TitlePadding }
              style={{width: "100px"}}
              label="Padding"
            />
            <NumberControl
              isShiftStepEnabled={ true }
              onChange={ e => setAttributes({TitleMargin: e}) }
              shiftStep={ 10 }
              value={ TitleMargin }
              style={{width: "100px"}}
              label="Margin"
            />

          </PanelBody>
          
          {/* ********************* */}
          {/* Content Styling */}
          {/* ********************* */}

          <PanelBody title="Content" initialOpen={ false }>
            <PanelRow></PanelRow>        
            <FontSizePicker
                  fontSizes={[
                    {
                      name: __( 'Small' ),
                      slug: 'small',
                      size: 12,
                    },
                    {
                      name: __( 'Large' ),
                      slug: 'large',
                      size: 26,
                    },
                  ]}
                  value={ ContentFontSize }
                  fallbackFontSize={ 12 }
                  onChange={(size) => setAttributes({ContentFontSize: size})}
                  withSlider
            />

            <ColorPalette
              colors={ [
                { name: 'red', color: '#f00' },
                { name: 'white', color: '#fff' },
                { name: 'blue', color: '#00f' },
              ] }
              value={ ContentColor }
              style={{width: "150px" }}
              onChange={(color) => setAttributes({ContentColor: color})}
            />
            
            <NumberControl
              isShiftStepEnabled={ true }
              onChange={ e => setAttributes({ContentPadding: e}) }
              shiftStep={ 10 }
              value={ ContentPadding }
              style={{width: "100px"}}
              label="Padding"
            />
            <NumberControl
              isShiftStepEnabled={ true }
              onChange={ e => setAttributes({ContentMargin: e}) }
              shiftStep={ 10 }
              value={ ContentMargin }
              style={{width: "100px"}}
              label="Margin"
            />
            
            

          </PanelBody>


          {/* ********************* */}
          {/* Image Styling */}
          {/* ********************* */}


        

        </PanelBody>
          
      </InspectorControls>

   

     {

      <div className={selectedLayout}>
        <div className="filter-post" style={PostStyling} >
          <div className="post-image-wrapper">
           

          </div>

          <div className="post-title-wrapper">
            <p style={TitleStyling}>Lorem Ipsum</p>
          </div>

          <div style={ContentStyling} className="post-content-wrapper">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>2021-07-02</p>
          </div>
         
        </div>

        <div className="filter-post" style={PostStyling} >
          <div className="post-image-wrapper">
         
            
          </div>

          <div className="post-title-wrapper">
            <p style={TitleStyling}>Lorem Ipsum</p>
          </div>

          <div style={ContentStyling} className="post-content-wrapper">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>2021-07-02</p>
          </div>
         
        </div>

        <div className="filter-post" style={PostStyling} >
          <div className="post-image-wrapper">
        
            
          </div>

          <div className="post-title-wrapper">
            <p style={TitleStyling}>Lorem Ipsum</p>
          </div>

          <div style={ContentStyling} className="post-content-wrapper">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>2021-07-02</p>
          </div>
         
        </div>

        <div className="filter-post" style={PostStyling} >
          <div className="post-image-wrapper">
          
          </div>

          <div className="post-title-wrapper">
            <p style={TitleStyling}>Lorem Ipsum</p>
          </div>

          <div style={ContentStyling} className="post-content-wrapper">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>2021-07-02</p>
          </div>
         
        </div>
        

      </div>

     }
    </div>
  );
}




// collumn 


// excerpt, ta bort html tags. lägg till compenet för att styra mängden text som visas 

