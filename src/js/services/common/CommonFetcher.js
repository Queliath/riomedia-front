import fetch from 'cross-fetch';
import {services} from "./ServicesUrls";

export const fetchCommon = async (serviceName, storageItemName=null, additionalUrlData='') => {
  if (storageItemName) {
    let storageString = sessionStorage.getItem(storageItemName);
    let storedData = storageString ? JSON.parse(storageString) : null;
    if (storedData) {
      return storedData;
    }
  }
  const response = await fetch(services[serviceName] + additionalUrlData);
  return response.json();
};