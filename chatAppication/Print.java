import java.util.*;


public class Print {


    public static void main(String[] args) {
        String[] name = {"ram","nivas","dhaker","ram","ram","nivas","kamal","jenny","ram"};
        HashMap<String, Integer> map = new HashMap<String, Integer>();
        String tempStr;
        for (int i = 0; i < name.length; i++)
        {
            tempStr = name[i];
            if(map.containsKey(tempStr))
            {
                map.put(tempStr, map.get(tempStr) + 1);
            }
            else
            {
                map.put(tempStr,1);
            }
        }


        Iterator itr =map.entrySet().iterator();
        String nameOFPerson="" ;
        int count=0;
        while (itr.hasNext()) {
            Map.Entry pair = (Map.Entry)itr.next();
            Integer frequency=(Integer)pair.getValue()
;            if(count<frequency);
            {
                nameOFPerson=(String)pair.getKey();
                count=frequency;

            }
            
        }

        System.out.print(nameOFPerson);
    }
}