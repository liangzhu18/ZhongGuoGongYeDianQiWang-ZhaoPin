package zhaopin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import zhaopin.hibernate.ActivitiesEntranceRepository;
import zhaopin.hibernate.NavRepository;
import zhaopin.hibernate.RecommendKeywordsRepository;
import zhaopin.hibernate.UserRepository;
import zhaopin.hibernate.entity.ActivitiesEntrance;
import zhaopin.hibernate.entity.Nav;
import zhaopin.hibernate.entity.RecommendKeywords;
import zhaopin.hibernate.entity.User;
import zhaopin.service.AddDataService;

@Controller    // This means that this class is a Controller
@RequestMapping(path="/demo") // This means URL's start with /demo (after Application path)
public class MainController {
	@Autowired // This means to get the bean called userRepository
	           // Which is auto-generated by Spring, we will use it to handle the data
	private UserRepository userRepository;
	
	@Autowired
	private NavRepository navRepository;
	
	@Autowired
	private ActivitiesEntranceRepository activitiesEntranceRepository;
	
	@Autowired
	private RecommendKeywordsRepository recommendKeywordsRepository;

	@GetMapping(path="/add") // Map ONLY GET Requests
	public @ResponseBody String addNewUser (@RequestParam String name
			, @RequestParam String email) {
		// @ResponseBody means the returned String is the response, not a view name
		// @RequestParam means it is a parameter from the GET or POST request

		User n = new User();
		n.setName(name);
		n.setEmail(email);
		userRepository.save(n);
		return "Saved";
	}
	
	@GetMapping(path="/add-data") // Map ONLY GET Requests
	public @ResponseBody String addNav () {
		// @ResponseBody means the returned String is the response, not a view name

		new AddDataService().run(navRepository, 
				activitiesEntranceRepository,
			    recommendKeywordsRepository);

		return "Saved";
	}
	
	@GetMapping(path="/getNav")
	public @ResponseBody Iterable<Nav> getNavs() {
		// This returns a JSON or XML with the users
		return navRepository.findAll();
	}
	
	@GetMapping(path="/getActivitiesEntrance")
	public @ResponseBody Iterable<ActivitiesEntrance> getActivitiesEntrance() {
		// This returns a JSON or XML with the users
		return activitiesEntranceRepository.findAll();
	}
	
	@GetMapping(path="/getRecommendKeywords")
	public @ResponseBody Iterable<RecommendKeywords> getRecommendKeywords() {
		// This returns a JSON or XML with the users
		return recommendKeywordsRepository.findAll();
	}

	@GetMapping(path="/all")
	public @ResponseBody Iterable<User> getAllUsers() {
		// This returns a JSON or XML with the users
		return userRepository.findAll();
	}
	
	@GetMapping(path="/edit")
	public @ResponseBody Iterable<User> getAllUsers(@RequestParam String id,@RequestParam String name) {
		// This returns a JSON or XML with the users
		
		User u = userRepository.findById(Long.parseLong(id)).get();
		u.setName(name);
		userRepository.save(u);
		return userRepository.findAll();
	}
}