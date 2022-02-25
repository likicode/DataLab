"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[168],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,f=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(f,s(s({ref:t},c),{},{components:a})):n.createElement(f,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var d=2;d<o;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6480:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),s=["components"],l={},i="How to Save Processed Datasets?",d={unversionedId:"SDK/how_to_save_processed_dataset",id:"SDK/how_to_save_processed_dataset",title:"How to Save Processed Datasets?",description:"DataLab provides different modes for saving processed datasets. We will walk through them using the ag_new as an example.",source:"@site/docs/SDK/how_to_save_processed_dataset.md",sourceDirName:"SDK",slug:"/SDK/how_to_save_processed_dataset",permalink:"/DataLab/docs/SDK/how_to_save_processed_dataset",editUrl:"https://github.com/ExpressAI/DataLab/tree/main/docs/SDK/how_to_save_processed_dataset.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to Preprocess you Data?",permalink:"/DataLab/docs/SDK/how_to_preprocess_your_data"},next:{title:"Progress",permalink:"/DataLab/docs/SDK/task_normalization"}},c=[{value:"1: <code>realtime</code>",id:"1-realtime",children:[],level:3},{value:"2: <code>memory</code>",id:"2-memory",children:[],level:3},{value:"3: <code>local</code>",id:"3-local",children:[],level:3}],p={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-save-processed-datasets"},"How to Save Processed Datasets?"),(0,o.kt)("p",null,"DataLab provides different modes for saving processed datasets. We will walk through them using the ",(0,o.kt)("inlineCode",{parentName:"p"},"ag_new")," as an example."),(0,o.kt)("p",null,"(Note: the default mode is ",(0,o.kt)("inlineCode",{parentName:"p"},"realtime"),".)"),(0,o.kt)("h3",{id:"1-realtime"},"1: ",(0,o.kt)("inlineCode",{parentName:"h3"},"realtime")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from datalabs import load_dataset\nfrom featurize import *\n\n# load dataset\ndataset = load_dataset("ag_news")\n# calculate the text length for each sample and return dataset_iterator:Iterator\ndataset_iterator = dataset[\'test\'].apply(get_length, mode="realtime") # dataset_iterator is an Iterator\nprint(next(dataset_iterator))\n\n"""\nprinted results:\n{\'text_length\': 27}\n"""\n\n')),(0,o.kt)("h3",{id:"2-memory"},"2: ",(0,o.kt)("inlineCode",{parentName:"h3"},"memory")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from datalabs import load_dataset\nfrom featurize import *\n\n# load dataset\ndataset = load_dataset("ag_news")\n# calculate the text length for each sample and return dataset_new:Dataset (not an iterator)\ndataset_new = dataset[\'test\'].apply(get_length, mode="memory") # dataset_new is the same as dataset but with a new feature `text_length`\nprint(dataset_new)\n"""\nprinted results of dataset_new\nDataset({\n    features: [\'text\', \'label\', \'text_length\'],\n    num_rows: 7600\n})\n"""\n')),(0,o.kt)("h3",{id:"3-local"},"3: ",(0,o.kt)("inlineCode",{parentName:"h3"},"local")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from datalabs import load_dataset\nfrom featurize import *\n\n# load dataset\ndataset = load_dataset("ag_news")\n# calculate the text length for each sample and (1) return dataset_new:Dataset (not an iterator) (2) save the dataset_new locally,\n# so that you can directly load the new version next time.\ndataset_new = dataset[\'test\'].apply(get_length, mode="local") # dataset_new is the same as dataset but with a new feature `text_length`\nprint(dataset_new)\n"""\nprinted results of dataset_new\nDataset({\n    features: [\'text\', \'label\', \'text_length\'],\n    num_rows: 7600\n})\n"""\n')))}u.isMDXComponent=!0}}]);