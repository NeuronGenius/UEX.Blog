/*
 * @Author: liyang 
 * @Date: 2018-10-20 02:39:20 
 * @Last Modified by: liyang
 * @Last Modified time: 2018-10-21 16:10:06
 */
export const getDisplayName = component => {
  return component.displayName || component.name || 'Component';
};
