    export function isElementVisible(el) {
        console.log(el)
        if((typeof window !=="undefined") && (typeof el !== "undefined") && (el !== null) )
        {
          var rect = el.getBoundingClientRect(),
            vWidth = window.innerWidth || document.documentElement.clientWidth,
            vHeight = window.innerHeight || document.documentElement.clientHeight,
            efp = function(x, y) {
                return document.elementFromPoint(x, y) };
          console.log(rect)
          // Return false if it's not in the viewport
          console.log("hhhhhhhhhh")
          if (rect.right < 0 || rect.bottom < 0 || rect.left > vWidth || rect.top > vHeight)
            return false;
          console.log("rect")
          // Return true if any of its four corners are visible
          return (
            el.contains(efp(rect.left, rect.top)) || el.contains(efp(rect.right, rect.top)) || el.contains(efp(rect.right, rect.bottom)) || el.contains(efp(rect.left, rect.bottom))
          );
        }else
          return false;
    }