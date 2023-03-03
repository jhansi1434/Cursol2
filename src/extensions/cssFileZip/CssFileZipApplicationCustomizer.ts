import { Log } from '@microsoft/sp-core-library';

// import {SPComponentLoader} from '@microsoft/sp-loadersts';
import { SPComponentLoader } from '@microsoft/sp-loader';
//import { BaseApplicationCustomizer} from '@microsoft/sp-application-base';
//import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'CssFileZipApplicationCustomizerStrings';
//import { override } from '@microsoft/decorators';
//import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer, PlaceholderName
} from '@microsoft/sp-application-base';
// import { Dialog } from '@microsoft/sp-dialog';

//import * as strings from 'HeaderApplicationCustomizerStrings';
import { override } from '@microsoft/decorators';

//const LOG_SOURCE: string = 'HeaderApplicationCustomizer';

const LOG_SOURCE: string = 'CssFileZipApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface ICssFileZipApplicationCustomizerProperties {
  // This is an exarm -rf node_modules/MYPROJECTmple; replace with your own property
  cssurl: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class CssFileZipApplicationCustomizer
  extends BaseApplicationCustomizer<ICssFileZipApplicationCustomizerProperties> {
@override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    
    //SPComponentLoader.loadScript('https://8kwpty.sharepoint.com/sites/ZIP1/SiteAssets/New11.js');

    // let message: string = this.properties.cssurl;
    // if (!message) {
    //   message = '(No properties were provided.)';
    // }

    // Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`).catch(() => {
    //     // handle error 
    //  });

    
    // Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`).catch(() => {
    //   /* handle error */
    // });
    this.context.placeholderProvider.changedEvent.add(this,this.CustomHeader);
    return Promise.resolve();
  }
  public CustomHeader(){
    this.context.placeholderProvider.placeholderNames.map((placeholdername)=>{
      console.log(this.context.placeholderProvider.placeholderNames)
      console.log(PlaceholderName[placeholdername]);
      SPComponentLoader.loadCss('https://24cl8t.sharepoint.com/sites/Dev/SiteAssets/ZipCss.css');
    })
    
    this.context.placeholderProvider.tryCreateContent(
      PlaceholderName.Bottom
    ).domElement.innerHTML="<div style='background-color:black ;height:50px;color:white;text-align:center;margin-bottom:25px'>Copyright © 2023 - Zelarsoft, All Rights Reserved</div>"

     return Promise.resolve();
  }
}
