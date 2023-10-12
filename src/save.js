import { useBlockProps } from '@wordpress/block-editor';
import React from 'react';
import './BlockVariation.scss';

  export default function save({ attributes: { 
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
    }, setAttributes }) {

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
  
  const storeActiveTermsToURL = () => {
    if (CPTPosts && selectedTax) {
      const activeTerms = new Set();
		
      CPTPosts.forEach((post) => {
        if (post[selectedTax]) {
          if (Array.isArray(post[selectedTax])) {
            post[selectedTax].forEach((value) => {
              termArray.forEach((term) => {
                if (term.id === value) {
                  activeTerms.add(term.name);
                }
              });
            });
          } else {
            termArray.forEach((term) => {
              if (term.id === post[selectedTax]) {
                activeTerms.add(term.name);
              }
            });
          }
        }
      });

      const urlParams = new URLSearchParams(window.location.search);
      urlParams.set('filter', [...activeTerms].join(','));

      const newURL = `${window.location.origin}${window.location.pathname}?${urlParams.toString()}`;
      window.history.replaceState(null, '', newURL);
    }
  };


  if (CPTPosts) {
    let posts = CPTPosts.map((post) => {
      return { ...post, status: 'active' };
    });

    var postObjects = posts.map((post) => {
      let postTerms = [];
      
     

      if (sortedTax) {
        sortedTax.map((tax) => {
          if (post[tax] != null) {
            if (Array.isArray(post[tax])) {
              post[tax].forEach((value) => {
                termArray.forEach((term) => {
                  if (term.id === value) {
                    postTerms.push(term.name);
                  }
                });
              });
            } else {
              termArray.forEach((term) => {
                if (term.id === post[tax]) {
                  postTerms.push(term.name);
                }
              });
            }
          }
        });
      }

      return (
        <div style={PostStyling} key={post.id} className={postTerms.map((term) => term.toString()).join(' ') + ' filter-post'}>
          
          <p style={TitleStyling}>{post.title.rendered}</p>
          <p>{post.date}</p>
        </div>
      );
    });

    const taxFilter = sortedTax.map((tax, index) => {
      const activeTerms = new Set();
      posts.forEach((post) => {
        if (post[tax]) {
          if (Array.isArray(post[tax])) {
            post[tax].forEach((value) => {
              termArray.forEach((term) => {
                if (term.id === value) {
                  activeTerms.add(term.name);
                }
              });
            });
          } else {
            termArray.forEach((term) => {
              if (term.id === post[tax]) {
                activeTerms.add(term.name);
              }
            });
          }
        }
      });

      const uniqueId = `selectElementId_${index}`;

      return (
        <div key={tax}>
          <form action="">
            <label>
              {tax}
              <select className="selectElementClass" id={uniqueId} onChange={storeActiveTermsToURL}>
                <option>Visa Alla</option>
                {[...activeTerms].map((term) => (
                  <option key={term}>{term}</option>
                ))}
              </select>
            </label>
          </form>
        </div>
      );
    });
  

    return (
      <div {...useBlockProps.save()}>
        {taxFilter}
        <div className={selectedLayout}>
         {postObjects}
        </div>
      </div>
    );
  }
}
